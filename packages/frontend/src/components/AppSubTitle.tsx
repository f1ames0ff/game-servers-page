import React from "react";

interface Props {
    children?: any;
}

export function AppSubTitle(props: Props) {
    return <h1 className="display-5 p-4">{ props.children }</h1>
}