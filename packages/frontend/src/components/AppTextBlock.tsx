import React from "react";

interface Props {
    children?: any;
}

export function AppTextBlock(props: Props) {
    return <p className="p-4">{ props.children }</p>
}