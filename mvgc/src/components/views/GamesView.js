import React from 'react'
import GameCreaftionForm from '../forms/GameCreationForm'
import GameTable from './tables/GameTable'

const GamesView = (props) => {
    return (
        <div>
            <GameCreaftionForm />
            <GameTable />
        </div>
    )
}

export default GamesView