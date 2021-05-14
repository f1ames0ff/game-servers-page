import React from "react";

interface Props {
    children?: any;
}

export function AppTitle(props: Props) {
    return <h1 className="display-2 p-4">{ props.children }</h1>
}