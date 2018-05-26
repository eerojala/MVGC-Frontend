import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { userGameCreation, userGameUpdate } from '../../reducers/userGameReducer'

// Allows users to add games to their collections
class UserGameForm extends React.Component {
    status = null
    score = null
    
    defaultStatus = (this.props.userGame === null || this.props.userGame === undefined) ?
        null:
        this.props.userGame.status

    defaultScore = (this.props.userGame === null || this.props.userGame === undefined) ?
        null:
        this.props.userGame.score

    onSubmit = async (event) => {
        if (this.props.userGame === null || this.props.userGame === undefined) {
            this.createUserGame(event)
        } else {
            this.updateUserGame(event)
        }
    }

    createUserGame = async (event) => {
        event.preventDefault()

        const content = {
            game: this.props.game.id,
            status: this.status,
        }

        if (this.score !== null && this.score !== undefined) {
            content.score = this.score
        }

        this.props.userGameCreation(content)
    }

    updateUserGame = async (event) => {
        event.preventDefault()

        const content = { status: this.status }

        if (this.score !== null && this.score !== undefined) {
            content.score = this.score
        }

        this.props.userGameUpdate(this.props.userGameId, content)
    }

    title = () => {
        if (this.props.userGame === null || this.props.userGame === undefined) {
            return <h3>Add {this.props.game.name} ({this.props.game.platform.name}) to your collection</h3>
        } else {
            return <h3>Update {this.props.userGame.game.name} ({this.props.userGame.game.platform.name})</h3>
        }
    }

    render() {
        console.log(this.props)

        const statuses = [
            { key: 0, text: 'Unfinished', value: 'Unfinished' },
            { key: 1, text: 'Beaten', value: 'Beaten' },
            { key: 2, text: 'Completed', value: 'Completed' }
        ]
        const scores = [
            { key: 0, text: 'No rating', value: null },
            { key: 1, text: '1', value: 1 },
            { key: 2, text: '2', value: 2 },
            { key: 3, text: '3', value: 3 },
            { key: 4, text: '4', value: 4 },
            { key: 5, text: '5', value: 5 }
        ]

        if (this.props.game === null && this.props.userGame === null) {
            return null
        }

        return (
            <div>
                {this.title()}
                <Form onSubmit={this.onSubmit}>
                    <Form.Select 
                        fluid label="Status" 
                        defaultValue={this.defaultStatus} 
                        options={statuses} 
                        onChange={(event, {value}) => this.status = value} 
                    />
                    <Form.Select 
                        fluid label="Score" 
                        defaultValue={this.defaultScore} 
                        options={scores} 
                        onChange={(event, {value}) => this.score = value}
                    />
                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { gameId, userGameId } = props
    let game, userGame
    
    if (state.games === null) {
        return { game: null, userGame: null }
    }

    game = (gameId === null || gameId === undefined) ?
        null:
        state.games.find(game => game.id === gameId)

    userGame = (userGameId === null || userGameId === undefined) ?
        null:
        state.userGames.find(userGame => userGame.id === userGameId)

    return { 
        game: game,
        userGame: userGame
    }
}

const mapDispatchToProps = { userGameCreation, userGameUpdate }

export default connect(mapStateToProps, mapDispatchToProps) (UserGameForm)