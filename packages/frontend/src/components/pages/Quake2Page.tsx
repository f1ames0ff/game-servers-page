import React, { useEffect, useState } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppSubTitle } from "../AppSubTitle";
import { AppBadge } from "../AppBadge";
import { formatBytes } from "../../utils/files.utils";
import { AppFileList, loadFileList } from "../../api/files.api";
import { downloadFileThunk, ModType } from "src/store/thunks/download.thunk";
import { ServerStats } from "../ServerStats";
import { ServerStatsPayload } from "../../../../shared/types";
import { loadMonitoringStats } from "../../api/monitor.api";
import { getGameTrackerMapImageUrl } from "../../utils/game-tracker.utils";
import { AppTitleSmall } from "../AppTitleSmall";


export function QuakeQ2Page() {
    const [ requiredMods, setRequiredMods ] = useState<AppFileList>({});
    const [ stats, setStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [ mapImageUrl, setMapImageUrl ] = useState<string>('');
    const type = 'quake-q2';
    const serverPort = 27910;

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.q2[0]));

        loadFileList(type).then(data => {
            let { required } = data;

            setRequiredMods(required);
        }).catch(error => {
            console.error(new Error('Unable to load file list.'));
            throw error;
        });

        loadMonitoringStats('quake2', serverPort).then((data) => {
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

    return <PageWrapper id="quake-q2-page"
                        title="Quake II OSP">

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

    </PageWrapper>
}