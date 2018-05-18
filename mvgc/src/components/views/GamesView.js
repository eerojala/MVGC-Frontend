import React from 'react'
import GameCreaftionForm from '../forms/GameCreationForm'
import GamesList from './lists/GamesList'

const GamesView = (props) => {
    return (
        <div>
            <GameCreaftionForm />
            <GamesList />
        </div>
    )
}

export default GamesView