import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class PlatformTable extends React.Component {
    render() {
        return (
            <div>
                <h2>Platforms</h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Creator</Table.HeaderCell>
                            <Table.HeaderCell>Year</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.platforms.map(platform => <Table.Row key={platform.id}>
                            <Table.Cell><Link to={`/platforms/${platform.id}`}>{platform.name}</Link></Table.Cell>
                            <Table.Cell>{platform.creator}</Table.Cell>
                            <Table.Cell>{platform.year}</Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { platforms: state.platforms }
}

export default connect(mapStateToProps) (PlatformTable)