import React from "react";
import {Props} from "./types/props.interface";

export function AppBadge(props: Props) {
    return <span className="font-monospace badge bg-secondary">{props.children}</span>
}
