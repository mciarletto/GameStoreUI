import React from 'react'
import Player from './Player'

export default function PlayerList({ players, addCardToPlayer, updateCardStatus, updatePlayerMoney }) {
    if (players.length === 0) {
        return <p className='hint'>Begin by adding players</p>
    }
    return (
        <ul className="nav nav-list">
            {players.map(player => {
                return <Player key={player.id} player={player} addCardToPlayer={addCardToPlayer} updateCardStatus={updateCardStatus} updatePlayerMoney={updatePlayerMoney} />
            })}
        </ul>
    )
}