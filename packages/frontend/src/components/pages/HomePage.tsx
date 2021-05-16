import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { AppTextBlock } from "../AppTextBlock";
import { PageWrapper } from "./PageWrapper";
import { Link } from "react-router-dom";

export function HomePage() {
    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.general[1]));
    }, []);

    return <PageWrapper id="discord-page"
                        title="pro100.skill Community">
        <AppTextBlock>
            Добро пожаловать в сообщество <b>pro100.skill</b>!
        </AppTextBlock>

        <AppTextBlock>
            <p>
            В нашем игровом сообществе рады всем адекватным и доброжелательным людям.
            Мы любим классические арена-шутеры, поэтому мы играем
            в <Link className="App-nav-link" to="/quake-cpma">Quake 3</Link>,
                <span> <Link className="App-nav-link" to="/quake-q2">Quake II</Link> </span>
            и <span> <Link className="App-nav-link" to="/quake-qw">QuakeWorld</Link></span>.
            </p>

            <p>
            Для общения мы используем <Link className="App-nav-link" to="/discord">сервер Discord</Link>.
            А еще у нас есть cвой приватный
                <span> <Link className="App-nav-link" to="/valheim">сервер Valheim</Link> </span>
            для избранных :)
            </p>
        </AppTextBlock>
    </PageWrapper>
}