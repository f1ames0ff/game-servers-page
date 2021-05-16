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


export function QuakeQ2Page() {
    const [ requiredMods, setRequiredMods ] = useState<AppFileList>({});
    const type = 'quake-q2';

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.q2[0]));

        loadFileList(type).then(data => {
            let { required } = data;

            setRequiredMods(required);
        }).catch(error => {
            console.error(new Error('Unable to load file list.'));
            throw error;
        });
    }, []);

    function download(modType: ModType, name: string) {
        appStore.dispatch(downloadFileThunk({ modType, name, type }));
    }

    return <PageWrapper id="quake-q2-page"
                        title="Quake II OSP">

        <article>
            <AppSubTitle>
                Дуэльный сервер
            </AppSubTitle>

            <h2>
                <AppBadge>f1am3d.servegame.com:27910</AppBadge>
            </h2>

            <a href="https://www.gametracker.com/server_info/89.177.116.121:27910/"
               target="_blank">
                <img src="https://cache.gametracker.com/server_info/89.177.116.121:27910/b_560_95_1.png"
                     width="560"
                     height="95"
                     alt=""/>
            </a>
        </article>

        <hr/>

        <article>
            <AppSubTitle>Необходимые моды</AppSubTitle>

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
        </article>

    </PageWrapper>
}