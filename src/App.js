import React, { useState, useRef } from 'react';
import PlayerList from './PlayerList'
import { v4 as uuidv4 } from 'uuid'

const STORAGE_KEY = 'gamestoreapp.players'

function App() {
  const [players, setPlayers] = useState([]);
  const playerNameRef = useRef();

  console.log('Hello, world')

  function handleAddPlayer(e) {
    const name = playerNameRef.current.value
    if (name === '') return
    setPlayers(prevPlayers => {
      return [...prevPlayers, { id: uuidv4(), name: name, money: 1500, isUpNext: false}]
    })
    playerNameRef.current.value = null
  }

  return (
    <>
      <PlayerList players={players} />
      <input ref={playerNameRef} type="text" />
      <button onClick={(handleAddPlayer)}>Add Player</button>
    </>
  );
}

export default App;
