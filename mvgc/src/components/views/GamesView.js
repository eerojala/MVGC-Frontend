import React from 'react'
import GameForm from '../forms/GameForm'
import GamesList from './lists/GamesList'

const GamesView = (props) => {
    return (
        <div>
            <GameForm />
            <GamesList />
        </div>
    )
}

export default GamesView