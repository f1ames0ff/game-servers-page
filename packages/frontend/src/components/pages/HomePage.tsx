import React, {useEffect} from "react";
import {appStore} from "../../store/store";
import {updateBackground} from "../../store/reducers/app.reducer";
import {IMAGES} from "../../constants";
import {AppTextBlock} from "../shared/AppTextBlock";
import {PageWrapper} from "./page-wrapper/PageWrapper";
import {Link} from "react-router-dom";

export function HomePage() {
    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.general[1]));
    }, []);

    return <PageWrapper
        id="discord-page"
        title="Community"
    >
        <AppTextBlock>
            Welcome to <b>game community</b>!
        </AppTextBlock>

        <AppTextBlock>
            <p>
                For communication we are using
                <Link
                    className="App-nav-link"
                    to="/discord"
                >
                    Discord
                </Link>.

                And we have our own private
                <span>
                    <Link
                        className="App-nav-link"
                        to="/valheim"
                    >
                        Valheim server
                    </Link>
                </span>
            </p>
        </AppTextBlock>
    </PageWrapper>
}
