import React, { useEffect } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppTextBlock } from "../AppTextBlock";

export function QuakeCPMAPage() {
    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.general[0]));
    }, []);

    return <PageWrapper id="quake-cpma-page"
                        title="Quake 3 CPMA">
        <AppTextBlock>
            Скоро будет...
        </AppTextBlock>
    </PageWrapper>
}