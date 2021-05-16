import React from "react";

interface Props {
    children?: any;
}

export function AppSubTitle(props: Props) {
    return <article><h2 className="display-5 p-4">{ props.children }</h2></article>
}