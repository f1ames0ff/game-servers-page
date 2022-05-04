import React, {useEffect} from "react";
import {appStore} from "../../store/store";
import {updateBackground} from "../../store/reducers/app.reducer";
import {IMAGES} from "../../constants";
import {AppTextBlock} from "../shared/AppTextBlock";
import {PageWrapper} from "./page-wrapper/PageWrapper";
import {Link} from "react-router-dom";

export function SupportPage() {
    const types = [
        {
            link: 'https://www.donationalerts.com/r/f1am3d_qcz',
            icon: `${process.env.REACT_APP_SERVER_ADDRESS}/images/support/types-icons/donationalerts.jpg`,
            text: 'donationalerts',
        },
        {
            link: 'https://streamlabs.com/f1am3d_qcz/tip',
            icon: `${process.env.REACT_APP_SERVER_ADDRESS}/images/support/types-icons/streamlabs.png`,
            text: 'streamlabs',
        }
    ]

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.support[0]));
    }, []);

    return <PageWrapper
        id="discord-page"
        title="Support Us"
    >

        <AppTextBlock>
            You can support us
        </AppTextBlock>

        <div className="row justify-content-center">
            {
                types.map(
                    ({link, icon}) => <div className="col-3">
                        <a
                            href={link}
                            target="_blank"
                        >
                            <img
                                className="img-thumbnail"
                                width={64}
                                src={icon}
                                alt=""
                            />
                        </a>
                    </div>
                )
            }
        </div>

        <AppTextBlock>
            Or you can boost our <Link
            className="App-nav-link"
            to="/discord"
        >
            Discord
        </Link> ;)

        </AppTextBlock>

    </PageWrapper>
}
