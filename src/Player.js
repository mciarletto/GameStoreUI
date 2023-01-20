import React from 'react'

export default function Player({ player }) {
    return (
        <div>
            {player.name}: ${player.money}
        </div>
    )
}