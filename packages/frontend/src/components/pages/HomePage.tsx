import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { AppTextBlock } from "../AppTextBlock";
import { PageWrapper } from "./PageWrapper";

export function HomePage() {
    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.general[0]));
    }, []);

    return <PageWrapper id="discord-page"
                        title="f1am3d Games Community">
        <AppTextBlock>Добро пожаловать в сообщество f1am3d Games!
                      В нашем игровом сообществе рады всем адекватным и доброжелательным людям.</AppTextBlock>
    </PageWrapper>
}