import React from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class GameTable extends React.Component {
    render() {
        return (
            <div>
                <h2>Games</h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Platform</Table.HeaderCell> 
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.games.map(game => <Table.Row key={game.id}>
                            <Table.Cell>
                                <Link to={`/games/${game.id}/add`}>
                                    <Button>Add</Button>
                                </Link>
                            </Table.Cell>
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
    return { games: state.games }
}

export default connect(mapStateToProps) (GameTable)