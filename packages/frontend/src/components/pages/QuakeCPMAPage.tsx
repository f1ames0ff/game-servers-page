import React, { useEffect, useState } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppSubTitle } from "../AppSubTitle";
import { AppBadge } from "../AppBadge";
import { formatBytes } from "../../utils/files.utils";
import { AppFileList, loadFileList } from "../../api/files.api";
import { downloadFileThunk, ModType } from "../../store/thunks/download.thunk";
import { ServerStats } from "../ServerStats";
import { ServerStatsPayload } from "../../../../shared/types";
import { loadMonitoringStats } from "../../api/monitor.api";
import { getGameTrackerMapImageUrl } from "../../utils/game-tracker.utils";
import { AppTitleSmall } from "../AppTitleSmall";

export function QuakeCPMAPage() {
    const [ requiredMods, setRequiredMods ] = useState<AppFileList>({});
    const [ optionalMods, setOptionalMods ] = useState<AppFileList>({});
    const [ stats, setStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [ mapImageUrl, setMapImageUrl ] = useState<string>('');
    const type = 'quake-cpma';
    const serverPort = 27960;

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.q3[0]));

        loadFileList(type).then(data => {
            let { required, optional } = data;

            setRequiredMods(required);
            setOptionalMods(optional);
        }).catch(error => {
            console.error(new Error('Unable to load file list.'));
            throw error;
        });

        loadMonitoringStats('quake3', serverPort).then((data) => {
            const url = getGameTrackerMapImageUrl(data);

            setStats(data);
            setMapImageUrl(url);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function download(modType: ModType, name: string) {
        appStore.dispatch(downloadFileThunk({ modType, name, type }));
    }

    return <PageWrapper id="quake-cpma-page"
                        title="Quake 3 CPMA">


        <AppSubTitle>Мониторинг</AppSubTitle>

        <ServerStats stats={ stats }
                     image={ mapImageUrl }
                     address={ `f1am3d.servegame.com:${ serverPort }` }/>

        <hr/>

        <AppSubTitle>Моды</AppSubTitle>
        <AppTitleSmall>Необходимые</AppTitleSmall>

        <ul className="App-list-group pb-4">
            {
                Object.entries(requiredMods ?? {}).map(
                    ([ key, value ]) =>
                        <li key={ key }
                            className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="App-nav-link"
                                  onClick={ () => download('required', key) }>{ key }</span>

                            <span className="App-badge rounded-pill">{ formatBytes(value.size) }</span>
                        </li>
                )
            }
        </ul>

        <AppTitleSmall>Рекомендуемые</AppTitleSmall>

        <ul className="App-list-group pb-4">
            {
                Object.entries(optionalMods ?? {}).map(
                    ([ key, value ]) =>
                        <li key={ key }
                            className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="App-nav-link"
                                  onClick={ () => download('optional', key) }>{ key }</span>

                            <span className="App-badge rounded-pill">{ formatBytes(value.size) }</span>
                        </li>
                )
            }
        </ul>
    </PageWrapper>
}