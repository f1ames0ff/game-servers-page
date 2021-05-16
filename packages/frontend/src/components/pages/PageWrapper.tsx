import { AppTitle } from "../AppTitle";
import React, { useEffect } from "react";

interface Props {
    id: string;
    title: string;
    children?: JSX.Element | JSX.Element[] | never[]
}

export function PageWrapper(props: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="game-page container flex-grow-1 h-100"
                id={ props.id }>
        <div className="row justify-content-center">
            <div className="col-8 text-center">

                <AppTitle>{ props.title }</AppTitle>

                <hr/>

                { props.children }

            </div>
        </div>
    </div>
}