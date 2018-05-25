import React from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { userGameRemoval } from '../../../reducers/userGameReducer'

// Table for displaying an user's game collection
class GameCollectionTable extends React.Component {
    sameUserLoggedIn = () => {
        const { userId, loggedInUserId } = this.props

        if (userId === null || userId === undefined || loggedInUserId === null) {
            return false
        }

        return userId === loggedInUserId
    }

    removeUserGame = async (id) => {
        this.props.userGameRemoval(id)
    }
        

    emptyHeaderCell = () => {
        return this.sameUserLoggedIn() ?
            <Table.HeaderCell></Table.HeaderCell>:
            null
    }

    updateButton = (id) => {
        return this.sameUserLoggedIn() ?
            <Link to={`/usergames/${id}/update`}>
                <Button>Update</Button>
            </Link>:
            null
    }

    deleteButton = (id) => { 
        return this.sameUserLoggedIn() ?
            <Button onClick={() => { this.removeUserGame(id) } }>Remove</Button>:
            null
    }
    
    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        {this.emptyHeaderCell()}
                        <Table.HeaderCell>Game</Table.HeaderCell>
                        <Table.HeaderCell>Platform</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.gameCollection.map(ownedGame => 
                        <Table.Row key={ownedGame.id}>
                            <Table.Cell>
                                {this.updateButton(ownedGame.id)}
                                {this.deleteButton(ownedGame.id)}
                            </Table.Cell>
                            <Table.Cell>
                                <Link to={`/games/${ownedGame.game.id}`}>{ownedGame.game.name}</Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Link to={`/platforms/${ownedGame.game.platform._id}`}>{ownedGame.game.platform.name}</Link>
                            </Table.Cell>
                            <Table.Cell>{ownedGame.status}</Table.Cell>
                            <Table.Cell>{ownedGame.score}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { userId } = props
    let gameCollection, loggedInUserId

    if (userId === null || userId === undefined) {
        gameCollection = null
    } else {
        gameCollection = state.userGames.filter(userGame => userGame.user._id === userId)
    }
    
    if (state.loggedInUser === null || state.loggedInUser === undefined) {
        loggedInUserId = null
    } else {
        loggedInUserId = state.loggedInUser.id
    }

    return  { 
        gameCollection: gameCollection,
        loggedInUserId: loggedInUserId
    }
}

const mapDispatchToProps = { userGameRemoval }

export default connect(mapStateToProps, mapDispatchToProps) (GameCollectionTable)