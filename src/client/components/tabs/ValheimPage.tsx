import './Valheim.scss';
import React, { useEffect, useState } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { AppTextBlock } from "../AppTextBlock";
import { AppSubTitle } from "../AppSubTitle";
import { PageWrapper } from "./PageWrapper";
import { Link } from 'react-router-dom';
import { AppFileList, loadFileList } from "../../api/files.api";
import { formatBytes } from "../../utils/files.utils";
import { downloadFileThunk } from "../../store/thunks/download.thunk";
import { ServerStats } from "../ServerStats";
import { getHostAddress } from "../../utils/http.utils";
import { AppTitleSmall } from '../AppTitleSmall';
import { ServerStatsPayload, Valheim } from "../../../types";
import { loadMonitoringStats } from "../../api/monitor.api";

type ModType = 'required' | 'optional';


export function ValheimPage() {
    const [ requiredMods, setRequiredMods ] = useState<AppFileList>({});
    const [ optionalMods, setOptionalMods ] = useState<AppFileList>({});
    const [ stats, setStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const serverPort = 2456;
    const type = 'valheim';

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.valheim[0]));

        loadFileList(type).then(data => {
            let { required, optional } = data;

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
        appStore.dispatch(downloadFileThunk({ modType, name, type }));
    }

    return <PageWrapper id="valheim-page"
                        title="Cервер Valheim">

        <AppTextBlock>
            Valheim — компьютерная игра в жанре симулятора выживания в открытом мире, разрабатываемая
            шведской компанией Iron Gate и изданная компанией Coffee Stain.
            Игра в стадии раннего доступа вышла на платформе Steam 2 февраля 2021 года.
        </AppTextBlock>

        <hr/>

        <AppSubTitle>Мониторинг</AppSubTitle>

        <ServerStats stats={ stats }
                     image={ `${ getHostAddress() }/images/valheim/76646264e726fe76903a81cd.jpg` }
                     gameType="default"
                     address={ `f1am3d.servegame.com:${ serverPort }` }/>

        <AppTextBlock>
            <p>Пароль к серверу можно узнать в <Link className="App-nav-link"
                                                     to="/discord"> нашем Дискорде</Link></p>
        </AppTextBlock>

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

export default ValheimPage;
