import './valheim.scss';
import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/app.reducer";
import { IMAGES } from "../../constants";
import { AppTextBlock } from "../AppTextBlock";
import { AppSubTitle } from "../AppSubTitle";
import { AppBadge } from "../AppBadge";
import { PageWrapper } from "./PageWrapper";
import { Link } from 'react-router-dom';

export function ValheimPage() {
    const mods = {
        required: [
            {
                name: 'BepInEx',
                size: 23214213
            }
        ],
        optional: [
            {
                name: 'test',
                size: 23214213
            }
        ]
    };

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.valheim[0]));
    }, []);

    return <PageWrapper id="valheim-page"
                        title="Cервер Valheim">

        <AppTextBlock>
            Valheim — компьютерная игра в жанре симулятора выживания в открытом мире, разрабатываемая
            шведской компанией Iron Gate и изданная компанией Coffee Stain.
            Игра в стадии раннего доступа вышла на платформе Steam 2 февраля 2021 года.
        </AppTextBlock>

        <hr/>

        <AppSubTitle>Адрес сервера</AppSubTitle>

        <h4>
            <AppBadge>f1am3d.servegame.com:2456</AppBadge>
        </h4>

        <AppTextBlock>
            <p>Пароль к серверу можно узнать в <Link className="App-nav-link"
                                                  to="/discord"> нашем Дискорде</Link></p>
        </AppTextBlock>

        <hr/>

        <AppSubTitle>Необходимые моды</AppSubTitle>

        <ul className="App-list-group pb-4">
            {
                mods.required.map(
                    item =>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <a className="App-nav-link"
                               href="#">{ item.name }</a>
                            <span className="App-badge rounded-pill">{ item.size }</span>
                        </li>
                )
            }
        </ul>

        <hr/>

        <AppSubTitle>Рекомендуемые моды</AppSubTitle>

        <ul className="App-list-group pb-4">
            {
                mods.optional.map(
                    item =>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <a className="App-nav-link"
                               href="#">{ item.name }</a>
                            <span className="App-badge rounded-pill">{ item.size }</span>
                        </li>
                )
            }
        </ul>

    </PageWrapper>
}