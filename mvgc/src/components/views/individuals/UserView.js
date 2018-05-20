import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserView extends React.Component {
    render () {
        const { user } = this.props

        if (user === null || user === undefined) {
            return null
        }

        return (
            <div>
                <div>
                    <h2>{user.username}</h2>
                    <p>Role: {user.role}</p>
                </div>
                <div>
                    <h3>Games:</h3>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Game</Table.HeaderCell>
                                <Table.HeaderCell>Platform</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Score</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {user.ownedGames.map(ownedGame => 
                                <Table.Row key={ownedGame._id}>
                                    <Table.Cell>
                                        <Link to={`/games/${ownedGame.game._id}`}>{ownedGame.game.name}</Link>
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { userId } = props

    if (state.users === null) {
        return { user: null }
    }

    return {
        user: state.users.find(user => user.id === userId)
    }
}

export default connect(mapStateToProps) (UserView)