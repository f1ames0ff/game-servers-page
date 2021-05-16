import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppSubTitle } from "../AppSubTitle";
import { AppBadge } from "../AppBadge";

export function QuakeQWPage() {
    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.qw[0]));
    }, []);

    return <PageWrapper id="quake-qw-page"
                        title="QuakeWorld">

        <article>
            <AppSubTitle>
                Deathmatch сервер
            </AppSubTitle>

            <h2>
                <AppBadge>f1am3d.servegame.com:27500</AppBadge>
            </h2>

            <a href="https://www.gametracker.com/server_info/89.177.116.121:27500/"
               target="_blank">
                <img src="https://cache.gametracker.com/server_info/89.177.116.121:27500/b_560_95_1.png"
                     width="560"
                     height="95"
                     alt=""/>
            </a>
        </article>

        <hr/>

        <article>
            <AppSubTitle>
                Дуэльный сервер
            </AppSubTitle>

            <h2>
                <AppBadge>f1am3d.servegame.com:27501</AppBadge>
            </h2>

            <a href="https://www.gametracker.com/server_info/89.177.116.121:27501/"
               target="_blank">
                <img src="https://cache.gametracker.com/server_info/89.177.116.121:27501/b_560_95_1.png"
                     width="560"
                     height="95"
                     alt=""/>
            </a>
        </article>

    </PageWrapper>
}