import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GameView extends React.Component {
    list (array) {
        const list = []

        for (let i = 0; i < array.length - 1; i++) {
            list[i] = <span key={array[i]}>{array[i]}, </span>
        }

        list[array.length - 1] = array[array.length - 1]
        
        return list
    }

    render () {
        const { game } = this.props

        if (game === null || game === undefined) {
            return null
        }

        return (
            <div>
                <h2>{game.name}</h2>
                <div>
                    <p><Link to={`/platforms/${game.platform._id}`}>{game.platform.name}</Link> ({game.year})</p>
                    <br />
                </div>
                <div>
                    <h4>Developers</h4>
                    <p>{this.list(game.developers)}</p>
                    <br />
                </div>
                <div>
                    <h4>Publishers</h4>
                    <p>{this.list(game.publishers)}</p>
                    <br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    if (state.games === null) {
        return { game: null }
    }

    return {
        game: state.games.find(game => game.id === props.gameId)
    }
}

export default connect(mapStateToProps) (GameView)