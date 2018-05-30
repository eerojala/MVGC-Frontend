import React from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class GameTable extends React.Component {
    emptyHeaderCell = () => {
        return this.props.loggedInUser === null || this.props.loggedInUser === undefined ?
            null:
            <Table.HeaderCell />
    }

    addButton = (id) => {
        if (this.props.loggedInUser === null || this.props.loggedInUser === undefined) {
            return null
        } else {
            return (
                <Table.Cell>
                    <Link to={`/games/${id}/add`}>
                        <Button>Add</Button>
                    </Link>
                </Table.Cell>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Games</h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            {this.emptyHeaderCell()}
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Platform</Table.HeaderCell> 
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.games.map(game => <Table.Row key={game.id}>
                            {this.addButton(game.id)}
                            <Table.Cell>
                                <Link to={`/games/${game.id}`}>{game.name}</Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Link to={`/platforms/${game.platform._id}`}>{game.platform.name}</Link>
                            </Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { games: state.games, loggedInUser: state.loggedInUser }
}

export default connect(mapStateToProps) (GameTable)