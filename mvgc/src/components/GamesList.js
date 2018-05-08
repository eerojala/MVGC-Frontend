import React from 'react'

const GamesList = ({ games }) => {
    return (
        <div>
            <h2>Games</h2>
            <ul>
                {games.map(game => <li key={game.id}>
                    {game.name}
                </li>)}
            </ul>
        </div>
    )
}

export default GamesList