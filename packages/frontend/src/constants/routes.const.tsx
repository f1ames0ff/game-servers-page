import {ValheimPage} from "../components/pages/valheim/ValheimPage";
import React from "react";
import {DiscordPage} from "../components/pages";
import {HomePage} from "../components/pages";
import {QuakePage} from "../components/pages";
import {SupportPage} from "../components/pages";
import {CmsPage} from "../components/pages/cms/CmsPage";


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
    {
        name: '',
        path: '/cms',
        component: <CmsPage/>
    },
]
