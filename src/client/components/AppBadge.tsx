import React from "react";

interface Props {
    children?: any;
}

export function AppBadge(props: Props) {
    return <span className="font-monospace badge bg-secondary">{ props.children }</span>
}