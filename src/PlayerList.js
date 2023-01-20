import React from 'react'
import Player from './Player'

export default function PlayerList({ players }) {
    return (
        players.map(player => {
            return <Player key={player.id} player={player} />
        })
    )
}