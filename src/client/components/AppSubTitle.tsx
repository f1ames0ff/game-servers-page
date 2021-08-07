import React from "react";

interface Props {
    children?: any;
}

export function AppSubTitle(props: Props) {
    return <h2 className="p-4">{ props.children }</h2>
}