import React from 'react'

const HOTEL_HOUSE_COUNT = 5

export default function Card({ card, playerId, updateCardStatus }) {
    function handleMortgagedClick(e) {
        const mortgaged = e.target.checked
        // A mortgaged property cannot have any houses
        if (mortgaged) card.houses = 0
        updateCardStatus(playerId, card.name, e.target.checked, card.houses)
    }

    function handleSetNoHouses(e) {
        updateCardStatus(playerId, card.name, card.mortgaged, 0)
    }
    function handleSetOneHouse(e) {
        updateCardStatus(playerId, card.name, false, 1)
    }
    function handleSetTwoHouses(e) {
        updateCardStatus(playerId, card.name, false, 2)
    }
    function handleSetThreeHouses(e) {
        updateCardStatus(playerId, card.name, false, 3)
    }
    function handleSetFourHouses(e) {
        updateCardStatus(playerId, card.name, false, 4)
    }
    function handleSetHotel(e) {
        updateCardStatus(playerId, card.name, false, 5)
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <p className="align-middle">{card.name}</p>
                </div>
                <div className="col">
                    <button className={"buildingButton noHouses " + ((card.houses === 0) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetNoHouses)}>&#8962;</button>
                    <button className={"buildingButton house " + ((card.houses > 0 && card.houses < HOTEL_HOUSE_COUNT) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetOneHouse)}>&#8962;</button>
                    <button className={"buildingButton house " + ((card.houses > 1 && card.houses < HOTEL_HOUSE_COUNT) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetTwoHouses)}>&#8962;</button>
                    <button className={"buildingButton house " + ((card.houses > 2 && card.houses < HOTEL_HOUSE_COUNT) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetThreeHouses)}>&#8962;</button>
                    <button className={"buildingButton house " + ((card.houses > 3 && card.houses < HOTEL_HOUSE_COUNT) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetFourHouses)}>&#8962;</button>
                    <button className={"buildingButton hotel " + ((card.houses > 4) ? "buildingSelected" : "buildingUnselected")} onClick={(handleSetHotel)}>&#8962;</button>
                    <label>
                    <input type="checkbox" checked={card.mortgaged} onChange={handleMortgagedClick} />
                    Mortgaged
                </label>
                </div>
            </div>
        </li>
    )
}