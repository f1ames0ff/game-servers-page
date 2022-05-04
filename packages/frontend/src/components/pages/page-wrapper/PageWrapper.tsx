import {AppTitle} from "../../shared/AppTitle";
import React, {useEffect} from "react";
import {Props} from "./types/props.interface";

export function PageWrapper(props: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div
        className="game-page container flex-grow-1 h-100 pb-5"
        id={props.id}
    >
        <div className="row justify-content-center">
            <div className="col-8 text-center">

                <AppTitle>{props.title}</AppTitle>

                <hr/>

                {props.children}

            </div>
        </div>
    </div>
}
