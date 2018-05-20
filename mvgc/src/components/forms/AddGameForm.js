import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { userGameCreation } from '../../reducers/userGameReducer'

// Allows users to add games to their collections
class AddGameForm extends React.Component {
    status = null
    score = null

    createUserGame = async (event) => {
        event.preventDefault()

        const content = {
            game: this.props.game.id,
            status: this.status,
            score: this.score
        }

        console.log(content)
        this.props.userGameCreation(content)
    }

    render() {
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

        if (this.props.game === null || this.props.game === undefined) {
            return null
        }

        return (
            <div>
                <h3>Add {this.props.game.name} ({this.props.game.platform.name}) to your collection</h3>
                <Form onSubmit={this.createUserGame}>
                    <Form.Select fluid label="Status" options={statuses} onChange={(event, {value}) => this.status = value} />
                    <Form.Select fluid label="Score" options={scores} onChange={(event, {value}) => this.score = value}/>
                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    if (state.games === null) {
        return { game: null }
    }

    return { game: state.games.find(game => game.id === props.gameId) }
}

const mapDispatchToProps = { userGameCreation }

export default connect(mapStateToProps, mapDispatchToProps) (AddGameForm)