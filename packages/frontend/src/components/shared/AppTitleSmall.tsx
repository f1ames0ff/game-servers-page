import React from "react";
import {Props} from "./types/props.interface";

export function AppTitleSmall(props: Props) {
    return <h5 className="text-start">{props.children}</h5>
}
