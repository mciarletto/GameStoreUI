import React from 'react'

export default function Card({ card, playerId, updateCardStatus }) {
    function handleMortgagedClick(e) {
        console.log(e.target.checked)
        updateCardStatus(playerId, card.name, e.target.checked, card.houses)
    }

    function handleSetOneHouse(e) {
        updateCardStatus(playerId, card.name, card.mortgaged, 1)
    }
    function handleSetTwoHouses(e) {
        updateCardStatus(playerId, card.name, card.mortgaged, 2)
    }
    function handleSetThreeHouses(e) {
        updateCardStatus(playerId, card.name, card.mortgaged, 3)
    }
    function handleSetFourHouses(e) {
        updateCardStatus(playerId, card.name, card.mortgaged, 4)
    }
    function handleSetHotel(e) {
        updateCardStatus(playerId, card.name, card.mortgaged, 5)
    }

    return (
        <div>
            <p>{card.name}
                <button className={"buildingButton house " + ((card.houses > 0) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetOneHouse)}>&#8962;</button>
                <button className={"buildingButton house " + ((card.houses > 1) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetTwoHouses)}>&#8962;</button>
                <button className={"buildingButton house " + ((card.houses > 2) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetThreeHouses)}>&#8962;</button>
                <button className={"buildingButton house " + ((card.houses > 3) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetFourHouses)}>&#8962;</button>
                <button className={"buildingButton hotel " + ((card.houses > 4) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetHotel)}>&#8962;</button>
                <label>
                    <input type="checkbox" onChange={handleMortgagedClick} />
                    Mortgaged
                </label>
                
            </p>
        </div>
    )
}