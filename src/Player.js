import React, { useRef } from 'react';
import CardList from './CardList'


export default function Player({ player, addCardToPlayer, updateCardStatus, updatePlayerMoney, updatePlayerLocation }) {

    const newCardRef = useRef();

    function handleAddCard(e) {
        addCardToPlayer(player.id, newCardRef.current.value)
        newCardRef.current.value = null
    }

    function updateMoney(e) {
        updatePlayerMoney(player.id, e.target.value)
    }

    function updateLocation(e) {
        updatePlayerLocation(player.id, e.target.value)
    }

    return (
        <li key={player.name} className="player">
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <h5>{player.name}</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Current location
                            <input className="form-control" type="text" defaultValue={player.location} placeholder="Go" onChange={updateLocation} />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-label">Money<input className="form-control" type="number" defaultValue={player.money} onChange={updateMoney} step="100" min="0" max="5000" /></label>
                        
                    </div>
                </div>
                
                <CardList cards={player.cards} updateCardStatus={updateCardStatus} playerId={player.id} />
                <input className="form-control" type="text" placeholder="Property name..." ref={newCardRef} />
                <button className="btn btn-primary mt-2" onClick={(handleAddCard)}>Add Property</button>
            </div>
        </div>
        </li>
    )
}