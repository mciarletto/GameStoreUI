import React, { useState, useRef } from 'react';
import PlayerList from './PlayerList'
import { v4 as uuidv4 } from 'uuid'
import './app.css'

const STORAGE_KEY = 'gamestoreapp.players'

function App() {
  const [players, setPlayers] = useState([])
  const [uid, setUid] = useState('')

  const newPlayerNameRef = useRef()
  const newStartingMoneyRef = useRef()
  const notesRef = useRef()

  function handleAddPlayer(e) {
    const name = newPlayerNameRef.current.value
    const money = newStartingMoneyRef.current.value
    if (name === '') return
    setPlayers(prevPlayers => {
      const newPlayer = {
        id: uuidv4(),
        name: name,
        money: money,
        isUpNext: false,
        cards: []
      }
      return [...prevPlayers, newPlayer]
    })
    newPlayerNameRef.current.value = null
  }

  function addCardToPlayer(ownerId, cardName) {
    console.log(ownerId)
    const newPlayers = [...players]
    const player = newPlayers.find(player => player.id === ownerId)
    if (cardName === '') return
    const existingCard = player.cards.find(card => card.name === cardName)
    if (existingCard) return
    const newCard = {
      name: cardName,
      houses: 0,
      mortgaged: false
    }
    player.cards = [...player.cards, newCard]
    setPlayers(newPlayers)
  }

  function updateCardStatus(ownerId, cardName, mortgaged, houseCount) {
    console.log(mortgaged)
    console.log(houseCount)
    const newPlayers = [...players]
    const player = newPlayers.find(player => player.id === ownerId)
    if (cardName === '') return
    const existingCard = player.cards.find(card => card.name === cardName)
    if (!existingCard) return
    existingCard.mortgaged = mortgaged
    existingCard.houses = houseCount
    setPlayers(newPlayers)
  }

  function updatePlayerMoney(playerId, money) {
    const newPlayers = [...players]
    const player = newPlayers.find(player => player.id === playerId)
    if (!player) return
    player.money = money
    setPlayers(newPlayers)
  }

  function handleSave() {
    const notes = notesRef.current.value
    console.log(notes)
    console.log(JSON.stringify(players))
  }

  return (
    <>
      <h3>Store an in-progress game of Monopoly!</h3>
      <PlayerList players={players} addCardToPlayer={addCardToPlayer} updateCardStatus={updateCardStatus} updatePlayerMoney={updatePlayerMoney} />
      <input ref={newPlayerNameRef} type="text" placeholder="Name..." />
      <input ref={newStartingMoneyRef} type="number" defaultValue="1500" step="100" min="0" max="5000" />
      <button onClick={(handleAddPlayer)}>Add Player</button>
      <br/>
      <input ref={notesRef} type="text" placeholder="General notes" />
      <br/>
      <button onClick={(handleSave)}>Save Game</button>
    </>
  );
}

export default App;
