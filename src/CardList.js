import React from 'react'
import Card from './Card'

export default function CardList({ cards, playerId, updateCardStatus }) {
    if (cards.length === 0) {
        return <p className='hint'>No properties</p>

    }
    return (
        <ul className="list-group">
            {cards.map(card => {
                return <Card key={card.name} card={card} updateCardStatus={updateCardStatus} playerId={playerId} />
            })}
        </ul>
    )
}