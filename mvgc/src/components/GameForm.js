import React from 'react'
import { connect } from 'react-redux'
import { gameCreation } from '../reducers/gameReducer'

class GameForm extends React.Component {
    createGame = async (event) => {
        event.preventDefault()

        const content = {
            name: event.target.name.value,
            platform: event.target.platform.value,
            year: event.target.year.value,
            developers: event.target.developers.value,
            publishers: event.target.publishers.value
        }

        this.props.gameCreation(content)
    }

    render() {
        return (
            <div>
                <h3>Create new</h3>
                <form onSubmit={this.createGame}>
                    <div>Name: <input name="name" /></div>
                    <div>Platform: <input name="platform" /></div>
                    <div>Year: <input name="year" /></div>
                    <div>Developers: <input name="developers" /></div>
                    <div>Publishers: <input name="publishers" /></div>
                    <button>Create</button>
                </form>
            </div>
        )
    } 
}

const mapDispatchToProps = { gameCreation }

const ConnectedGameForm = connect(null, mapDispatchToProps) (GameForm)

export default ConnectedGameForm