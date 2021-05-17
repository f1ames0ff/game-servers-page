import React from "react";

interface Props {
    children?: any;
}

export function AppTitleSmall(props: Props) {
    return <h5 className="text-start">{ props.children }</h5>
}