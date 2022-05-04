import {ValheimPage} from "../components/pages/valheim/ValheimPage";
import React from "react";
import {DiscordPage} from "../components/pages/DiscordPage";
import {HomePage} from "../components/pages/HomePage";
import {QuakePage} from "../components/pages/QuakePage";
import {SupportPage} from "../components/pages/SupportPage";


export const ROUTES = [
    {
        name: 'Home',
        path: '/home',
        component: <HomePage/>
    },
    {
        name: 'Valheim',
        path: '/valheim',
        component: <ValheimPage/>
    },
    {
        name: 'Quake',
        path: '/quake',
        component: <QuakePage/>
    },
    {
        name: 'Discord',
        path: '/discord',
        component: <DiscordPage/>
    },
    {
        name: 'Support Us',
        path: '/support',
        component: <SupportPage/>
    },
]
