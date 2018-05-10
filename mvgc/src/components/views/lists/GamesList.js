import React from 'react'
import { connect } from 'react-redux'

class GamesList extends React.Component {
    render() {
        return (
            <div>
                <h2>Games</h2>
                <ul>
                    {this.props.games.map(game => <li key={game.id}>{game.name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { games: state.games }
}

const ConnectedGamesList = connect(mapStateToProps) (GamesList)

export default ConnectedGamesList