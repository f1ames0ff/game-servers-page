import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppTextBlock } from "../AppTextBlock";

export function QuakeQ2Page() {
    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.general[0]));
    }, []);

    return <PageWrapper id="quake-q2-page"
                        title="Quake II OSP">
        <AppTextBlock>
            Скоро будет...
        </AppTextBlock>
    </PageWrapper>
}