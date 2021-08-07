import { ServerStatsPayload } from "../../types";

export function getGameTrackerGameType(type: string) {
    switch (type) {
        case 'quake1':
            return 'qw';
        case 'quake2':
            return 'q2';
        case 'quake3':
            return 'q3';
    }
}

export function getGameTrackerMapImageUrl({ type, map }: ServerStatsPayload) {
    const typeUri = getGameTrackerGameType(type);

    if (typeUri) {
        return `https://image.gametracker.com/images/maps/160x120/${ typeUri }/${ map }.jpg`
    }

    return '';
}