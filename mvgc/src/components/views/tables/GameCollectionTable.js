import React from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { userGameRemoval } from '../../../reducers/userGameReducer'
import { notification } from '../../../reducers/notificationReducer'

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
        if (this.props.userGameRemoval(id)) {
            this.props.notification('Success!', 'Successfully removed game from collection')
        } else {
            this.props.notification('Error', 'Error trying to remove a game from collection')
        }
    }
        

    emptyHeaderCell = () => {
        return this.sameUserLoggedIn() ?
            <Table.HeaderCell></Table.HeaderCell>:
            null
    }

    buttonCell = (id) => {
        return this.sameUserLoggedIn() ?
            <Table.Cell>
                {this.updateButton(id)}
                {this.deleteButton(id)}
            </Table.Cell>:
            null
    }

    updateButton = (id) => {
        return (
            <Link to={`/usergames/${id}/update`}>
                <Button>Update</Button>
            </Link>
        )
    }

    deleteButton = (id) => { 
        return <Button onClick={() => { this.removeUserGame(id) } }>Remove</Button>
    }
    
    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Game</Table.HeaderCell>
                        <Table.HeaderCell>Platform</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        {this.emptyHeaderCell()}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.gameCollection.map(ownedGame => 
                        <Table.Row key={ownedGame.id}>
                            <Table.Cell>
                                <Link to={`/games/${ownedGame.game._id}`}>{ownedGame.game.name}</Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Link to={`/platforms/${ownedGame.game.platform._id}`}>{ownedGame.game.platform.name}</Link>
                            </Table.Cell>
                            <Table.Cell>{ownedGame.status}</Table.Cell>
                            <Table.Cell>{ownedGame.score}</Table.Cell>
                            {this.buttonCell(ownedGame.id)}
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

const mapDispatchToProps = { userGameRemoval, notification }

export default connect(mapStateToProps, mapDispatchToProps) (GameCollectionTable)