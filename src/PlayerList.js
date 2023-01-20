import React from 'react'
import Player from './Player'

export default function PlayerList({ players, addCardToPlayer, updateCardStatus, updatePlayerMoney }) {
    if (players.length === 0) {
        return <p>No players added yet...</p>
    }
    return (
        players.map(player => {
            return <Player key={player.id} player={player} addCardToPlayer={addCardToPlayer} updateCardStatus={updateCardStatus} updatePlayerMoney={updatePlayerMoney} />
        })
    )
}