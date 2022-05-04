import './ServerStats.scss';
import React from "react";
import {Props} from "./types/props.interface";


export function ServerStats({stats, image, address, gameType}: Props) {
    const {
        name,
        map,
        players,
        bots,
        password,
        maxPlayers
    } = stats;

    function getBotsString() {
        return <>
            {players?.length ?? 0}
            {
                bots?.length > 0 &&
                <span>({bots?.length})</span>
            } / {maxPlayers ?? 0}
        </>;
    }

    return <div className="App-server-stats d-flex">
        <div className="container d-flex flex-row p-0">
            <div className="map-icon">
                <img
                    src={image ?? ''}
                    alt=""
                />
            </div>

            <div className="col text-rows text-start">
                <div className="row">
                    <div className="col flex-grow-0">
                        {password
                            ? <i className="bi bi-lock"/>
                            : <i className="bi bi-unlock"/>
                        }
                    </div>

                    <div className="col flex-grow-1">{name}</div>
                </div>

                <div className="row">
                    {
                        gameType &&
                        <div className="col-4">
                            <div className="row">
                                <div className="col flex-grow-0">
                                    <i className="bi bi-dice-5"/>
                                </div>

                                <div className="col flex-grow-1">{gameType}</div>
                            </div>
                        </div>
                    }

                    <div className="col-4">
                        <div className="row">
                            <div className="col flex-grow-0">
                                <i className="bi bi-person-fill"/>
                            </div>

                            <div className="col flex-grow-1">{getBotsString()}</div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="row">
                            <div className="col flex-grow-0">
                                <i className="bi bi-map"/>
                            </div>

                            <div className="col flex-grow-1">{map}</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col flex-grow-0">
                        <i className="bi bi-at"/>
                    </div>

                    <div className="col flex-grow-1">{address}</div>
                </div>
            </div>
        </div>
    </div>
}
