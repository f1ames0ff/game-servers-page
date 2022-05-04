import React from "react";
import {Props} from "./types/props.interface";

export function AppTextBlock(props: Props) {
    return <article><span className="p-4">{props.children}</span></article>
}
