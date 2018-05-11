import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class GamesList extends React.Component {
    render() {
        return (
            <div>
                <h2>Games</h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Platform</Table.HeaderCell>
                            <Table.HeaderCell>Year</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.games.map(game => <Table.Row key={game.id}>
                            <Table.Cell><Link to={`/games/${game.id}`}>{game.name}</Link></Table.Cell>
                            <Table.Cell><Link to={`/platforms/${game.platform._id}`}>{game.platform.name}</Link></Table.Cell>
                            <Table.Cell>{game.year}</Table.Cell>
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

export default connect(mapStateToProps) (GamesList)