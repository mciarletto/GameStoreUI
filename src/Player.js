import React, { useState, useRef } from 'react';
import CardList from './CardList'


export default function Player({ player, addCardToPlayer, updateCardStatus, updatePlayerMoney }) {

    const [newCardName, setNewCardName] = useState("")
    const newCardRef = useRef();

    function handleAddCard(e) {
        addCardToPlayer(player.id, newCardRef.current.value)
        newCardRef.current.value = null
    }

    function updateMoney(e) {
        updatePlayerMoney(player.id, e.target.value)
    }

    return (
        <div>
            <p>{player.name}: 
                <input type="number" defaultValue={player.money} onChange={updateMoney} step="100" min="0" max="5000" />
            </p>
            <CardList cards={player.cards} updateCardStatus={updateCardStatus} playerId={player.id} />
            <input type="text" placeholder="Property name..." ref={newCardRef} />
            <button onClick={(handleAddCard)}>Add Property</button>
            
        </div>
    )
}