import React from "react";
import {Props} from "./types/props.interface";

export function AppSubTitle(props: Props) {
    return <h2 className="p-4">{props.children}</h2>
}
