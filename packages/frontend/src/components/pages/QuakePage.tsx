import React, {useEffect, useState} from "react";
import {appStore} from "../../store/store";
import {updateBackground} from "../../store/reducers/app.reducer";
import {IMAGES} from "../../constants";
import {PageWrapper} from "./page-wrapper/PageWrapper";
import {AppSubTitle} from "../shared/AppSubTitle";
import {formatBytes} from "../../utils";
import {loadFileList} from "../../api/files.api";
import {downloadFileThunk, ModType} from "../../store/thunks/download.thunk";
import {ServerStats} from "../server-stats/ServerStats";
import {IDTech3, ServerStatsPayload} from "@app/shared/types";
import {loadMonitoringStats} from "../../api/monitor.api";
import {getGameTrackerMapImageUrl} from "../../utils";
import {AppTitleSmall} from "../shared/AppTitleSmall";
import {AppFileList} from "../../api/types";

export function QuakePage() {
    const [requiredMods, setRequiredMods] = useState<AppFileList>({});
    const [optionalMods, setOptionalMods] = useState<AppFileList>({});
    const [stats, setStats] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [mapImageUrl, setMapImageUrl] = useState<string>('');
    const type = 'quake-cpma';
    const serverPort = 27960;

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.q3[0]));

        loadFileList(type).then(data => {
            let {required, optional} = data;

            setRequiredMods(required);
            setOptionalMods(optional);
        }).catch(error => {
            console.error(new Error('Unable to load file list.'));
            throw error;
        });

        loadMonitoringStats<IDTech3>('quake3', serverPort).then((data) => {
            const url = getGameTrackerMapImageUrl(data);

            setStats(data);
            setMapImageUrl(url);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function download(modType: ModType, name: string) {
        appStore.dispatch(downloadFileThunk({modType, name, type}));
    }

    return <PageWrapper
        id="quake-cpma-page"
        title="Quake 3 CPMA"
    >

        <AppSubTitle>Monitoriing</AppSubTitle>

        <ServerStats
            stats={stats}
            image={mapImageUrl}
            gameType="Duel"
            address={`f1am3d.servegame.com:${serverPort}`}
        />

        <hr/>

        <AppSubTitle>Mods</AppSubTitle>
        <AppTitleSmall>Required</AppTitleSmall>

        <ul className="App-list-group pb-4">
            {
                Object.entries(requiredMods ?? {}).map(
                    ([key, value]) =>
                        <li
                            key={key}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span
                                className="App-nav-link"
                                onClick={() => download('required', key)}
                            >{key}</span>

                            <span className="App-badge rounded-pill">{formatBytes(value.size)}</span>
                        </li>
                )
            }
        </ul>

        <AppTitleSmall>Recommended</AppTitleSmall>

        <ul className="App-list-group pb-4">
            {
                Object.entries(optionalMods ?? {}).map(
                    ([key, value]) =>
                        <li
                            key={key}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span
                                className="App-nav-link"
                                onClick={() => download('optional', key)}
                            >{key}</span>

                            <span className="App-badge rounded-pill">{formatBytes(value.size)}</span>
                        </li>
                )
            }
        </ul>
    </PageWrapper>
}
