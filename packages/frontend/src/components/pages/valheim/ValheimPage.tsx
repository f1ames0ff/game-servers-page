import './Valheim.scss';
import React, {useEffect, useState} from "react";
import {appStore} from "../../../store/store";
import {updateBackground} from "../../../store/reducers/app.reducer";
import {IMAGES} from "../../../constants";
import {AppTextBlock} from "../../shared/AppTextBlock";
import {AppSubTitle} from "../../shared/AppSubTitle";
import {PageWrapper} from "../page-wrapper/PageWrapper";
import {Link} from 'react-router-dom';
import {loadFileList} from "../../../api/files.api";
import {formatBytes} from "../../../utils";
import {downloadFileThunk} from "../../../store/thunks/download.thunk";
import {ServerStats} from "../../server-stats/ServerStats";
import {ServerStatsPayload, Valheim} from '@app/shared/types';
import {loadMonitoringStats} from 'src/api/monitor.api';
import {getHostAddress} from "../../../utils";
import {AppTitleSmall} from '../../shared/AppTitleSmall';
import {ModType} from "./types/mod-type.type";
import {AppFileList} from "../../../api/types";


export function ValheimPage() {
    const [requiredMods, setRequiredMods] = useState<AppFileList>({});
    const [optionalMods, setOptionalMods] = useState<AppFileList>({});
    const [stats, setStats] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const serverPort = 2456;
    const type = 'valheim';

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.valheim[0]));

        loadFileList(type).then(data => {
            let {required, optional} = data;

            setRequiredMods(required as any);
            setOptionalMods(optional as any);
        }).catch(error => {
            console.error(new Error('Unable to load file list.'));
            throw error;
        });

        loadMonitoringStats<Valheim>('valheim', serverPort).then((data) => {
            setStats(data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    async function download(modType: ModType, name: string) {
        appStore.dispatch(downloadFileThunk({modType, name, type}));
    }

    return <PageWrapper
        id="valheim-page"
        title="Cервер Valheim"
    >

        <AppTextBlock>
            Valheim is a brutal exploration and survival game for 1-10 players set
            in a procedurally-generated world inspired by Norse mythology
        </AppTextBlock>

        <hr/>

        <AppSubTitle>Monitoring</AppSubTitle>

        <ServerStats
            stats={stats}
            image={`${getHostAddress()}/images/valheim/76646264e726fe76903a81cd.jpg`}
            gameType="default"
            address={`f1am3d.servegame.com:${serverPort}`}
        />

        <AppTextBlock>
            <p>
                Get server password here <Link
                className="App-nav-link"
                to="/discord"
            >Discord</Link></p>
        </AppTextBlock>

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

export default ValheimPage;
