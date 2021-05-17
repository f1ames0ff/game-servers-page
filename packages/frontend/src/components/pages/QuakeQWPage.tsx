import React, { useEffect, useState } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppSubTitle } from "../AppSubTitle";
import { ServerStats } from "../ServerStats";
import { loadMonitoringStats } from "../../api/monitor.api";
import { ServerStatsPayload } from "../../../../shared/types";
import { getGameTrackerMapImageUrl } from "../../utils/game-tracker.utils";
import { AppTitleSmall } from "../AppTitleSmall";
import { AppTextBlock } from "../AppTextBlock";

export function QuakeQWPage() {
    const [ duelStats, setDuelStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [ dmStats, setDmStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [ mapImageUrl, setMapImageUrl ] = useState<string>('');
    const serverPorts = {
        duel: 27501,
        dm: 27500
    };

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.qw[0]));

        loadMonitoringStats('quake1', serverPorts.duel).then((data) => {
            const url = getGameTrackerMapImageUrl(data);

            setDuelStats(data);
            setMapImageUrl(url);
        }).catch(error => {
            console.error(error);
        });

        loadMonitoringStats('quake1', serverPorts.dm).then((data) => {
            const url = getGameTrackerMapImageUrl(data);

            setDmStats(data);
            setMapImageUrl(url);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return <PageWrapper id="quake-qw-page"
                        title="QuakeWorld">

        <AppSubTitle>Мониторинг</AppSubTitle>

        <ServerStats stats={ dmStats }
                     image={ mapImageUrl }
                     address={ `f1am3d.servegame.com:${ serverPorts.dm }` }/>

        <hr/>

        <ServerStats stats={ duelStats }
                     image={ mapImageUrl }
                     address={ `f1am3d.servegame.com:${ serverPorts.duel }` }/>

        <hr/>

        <AppSubTitle>Моды</AppSubTitle>
        <AppTextBlock>Не требуются.</AppTextBlock>

    </PageWrapper>
}