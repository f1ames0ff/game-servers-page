import React from "react";
import {Props} from "./types/props.interface";

export function AppTitle(props: Props) {
    return <h1 className="display-3 p-4">{props.children}</h1>
}
