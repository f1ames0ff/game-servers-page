import React, { useEffect, useState } from "react";
import { appStore } from "../../store/store";
import { updateBackground } from "../../store/reducers/app.reducer";
import { IMAGES } from "../../constants";
import { PageWrapper } from "./PageWrapper";
import { AppSubTitle } from "../AppSubTitle";
import { ServerStats } from "../ServerStats";
import { loadMonitoringStats } from "../../api/monitor.api";
import { IDTech1, ServerStatsPayload } from "../../../types";
import { getGameTrackerMapImageUrl } from "../../utils/game-tracker.utils";
import { AppTextBlock } from "../AppTextBlock";

export function QuakeQWPage() {
    const [ duelStats, setDuelStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [ dmStats, setDmStats ] = useState<ServerStatsPayload>({} as ServerStatsPayload);
    const [ dmMapImageUrl, setDmMapImageUrl ] = useState<string>('');
    const [ duelMapImageUrl, setDuelMapImageUrl ] = useState<string>('');
    const serverPorts = {
        duel: 27501,
        dm: 27500
    };

    useEffect(() => {
        appStore.dispatch(updateBackground(IMAGES.quake.qw[0]));

        loadMonitoringStats<IDTech1>('quake1', serverPorts.duel)
            .then((data) => {
                const url = getGameTrackerMapImageUrl(data);

                setDuelStats(data);
                setDuelMapImageUrl(url);
            }).catch(error => {
            console.error(error);
        });

        loadMonitoringStats<IDTech1>('quake1', serverPorts.dm).then((data) => {
            const url = getGameTrackerMapImageUrl(data);

            setDmStats(data);
            setDmMapImageUrl(url);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return <PageWrapper id="quake-qw-page"
                        title="QuakeWorld">

        <AppSubTitle>Мониторинг</AppSubTitle>

        <ServerStats stats={ duelStats }
                     image={ duelMapImageUrl }
                     gameType="Duel"
                     address={ `f1am3d.servegame.com:${ serverPorts.duel }` }/>

        <hr/>

        <ServerStats stats={ dmStats }
                     image={ dmMapImageUrl }
                     gameType="DM"
                     address={ `f1am3d.servegame.com:${ serverPorts.dm }` }/>

        <hr/>

        <AppSubTitle>Моды</AppSubTitle>
        <AppTextBlock>Не требуются.</AppTextBlock>

    </PageWrapper>
}