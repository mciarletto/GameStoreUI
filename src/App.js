import React, { useState, useRef, useEffect } from 'react';
import PlayerList from './PlayerList'
import { v4 as uuidv4 } from 'uuid'
import './app.css'

const STORAGE_PLAYERS = 'gamestore-players.gg'
const STORAGE_NOTES = 'gamestore-notes.gg'

function App() {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem(STORAGE_PLAYERS)) || []
  )
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem(STORAGE_NOTES)) || []
  )
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
    console.log(JSON.stringify(players))
    console.log(notes)
  }

  function handleClear() {
    setPlayers([])
    setNotes('')
  }

  function updateNotes() {
    setNotes(notesRef.current.value)
  }

  /*useEffect(() => {
    console.log('loading')
    const storedGame = JSON.parse(localStorage.getItem(STORAGE_KEY))
    console.log(storedGame)
    if (storedGame && storedGame.players && storedGame.notes) {
      setPlayers(storedGame.players)
      setNotes(storedGame.notes)
    }
  }, [])*/

  useEffect(() => {
    console.log('saving')
    const game = {
      'players': players, 
      'notes': notes
    }
    const gameString = JSON.stringify(game)
    localStorage.setItem(STORAGE_PLAYERS, JSON.stringify(players))
    localStorage.setItem(STORAGE_NOTES, JSON.stringify(notes))
    console.log(gameString)
  }, [players, notes])

  

  return (
    <div className="container-md text-center">
      <h3>Store an in-progress game of Monopoly!</h3>
      <div className="container-sm">
        <div className="row">
          <label className="form-label">New Player<input className="form-control" ref={newPlayerNameRef} type="text" placeholder="Johnny Appleseed" /></label>
          <label className="form-label">Starting money<input className="form-control" ref={newStartingMoneyRef} type="number" defaultValue="1500" step="100" min="0" max="5000" /></label>
        </div>
        <button className="btn btn-primary" onClick={(handleAddPlayer)}>Add Player</button>
        <div className="row">
          <label className="form-label">Notes<input className="form-control" ref={notesRef} type="text" onChange={(updateNotes)} value={notes} placeholder="Add additional notes" /></label>
        </div>
        <button className="btn btn-primary m-2" onClick={(handleSave)}>Save Game</button><button className="btn btn-primary m-2" onClick={(handleClear)}>Clear Game</button>
      </div>
      <PlayerList players={players} addCardToPlayer={addCardToPlayer} updateCardStatus={updateCardStatus} updatePlayerMoney={updatePlayerMoney} />
    </div>
  );
}

export default App;
