import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { AppTextBlock } from "../AppTextBlock";
import { PageWrapper } from "./PageWrapper";

export function DiscordPage() {
    const widgetUrl = 'https://discord.com/widget?id=294474411162206210&theme=dark';

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.discord[0]));
    }, []);

    return <PageWrapper id="discord-page"
                        title="Наш сервер Discord">

        <AppTextBlock>
            Лучшее приложения для игрового общения.
            В нашем Дискорде вы можете задать любые вопросы о наших серверах, внести предложения
            или просто пообщаться в компании адекватных людей.
        </AppTextBlock>

        <div className="d-flex justify-content-center">
            <div className="p-2 bd-highlight">
                <iframe src={ widgetUrl }
                        width="500"
                        height="300"
                        allowTransparency={ true }
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>

            </div>
        </div>

    </PageWrapper>
}