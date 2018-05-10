import React from 'react'
import GameForm from './GameForm'
import GamesList from './GamesList'

const GamesView = (props) => {
    return (
        <div>
            <GameForm />
            <GamesList />
        </div>
    )
}

export default GamesView