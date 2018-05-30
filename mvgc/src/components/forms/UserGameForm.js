import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import Redirector from '../misc/Redirector'
import { userGameCreation, userGameUpdate } from '../../reducers/userGameReducer'
import { notification } from '../../reducers/notificationReducer'
import { redirect } from '../../reducers/redirectReducer'

// Allows users to add games to their collections
class UserGameForm extends React.Component {
    status = (this.props.userGame === null || this.props.userGame === undefined) ?
        'Unfinished':
        this.props.userGame.status

    score = (this.props.userGame === null || this.props.userGame === undefined || this.props.userGame.score === null) ?
        'No rating':
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
            score: this.score
        }

        const userGame = await this.props.userGameCreation(content)

        if (userGame === null) {
            this.props.notification('Error', 'Failure trying to add a new game to collection')
        } else {
            this.props.redirect('/games')
            this.props.notification('Success!', 'Successfully added game to collection')
        }
    }

    updateUserGame = async (event) => {
        event.preventDefault()

        const content = { 
            status: this.status,
            score: this.score 
        }

        const userGame = await this.props.userGameUpdate(this.props.userGameId, content)

        if (userGame === null) {
            this.props.notification('Error', 'Failure trying to update game collection entry')
        } else {
            this.props.redirect(`/users/${userGame.user._id}`)
            this.props.notification('Success!', 'Successfully updated game collection entry')
        }
    }

    title = () => {
        if (this.props.userGame === null || this.props.userGame === undefined) {
            return <h3>Add {this.props.game.name} ({this.props.game.platform.name}) to your collection</h3>
        } else {
            return <h3>Update {this.props.userGame.game.name} ({this.props.userGame.game.platform.name})</h3>
        }
    }

    render() {
        const statuses = [
            { key: 0, text: 'Unfinished', value: 'Unfinished' },
            { key: 1, text: 'Beaten', value: 'Beaten' },
            { key: 2, text: 'Completed', value: 'Completed' }
        ]
        const scores = [
            { key: 0, text: 'No rating', value: 'No rating' },
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
                        defaultValue={this.status} 
                        options={statuses} 
                        onChange={(event, {value}) => this.status = value} 
                    />
                    <Form.Select 
                        fluid label="Score" 
                        defaultValue={this.score} 
                        options={scores} 
                        onChange={(event, {value}) => this.score = value}
                    />
                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
                <Redirector />
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

const mapDispatchToProps = { userGameCreation, userGameUpdate, notification, redirect }

export default connect(mapStateToProps, mapDispatchToProps) (UserGameForm)