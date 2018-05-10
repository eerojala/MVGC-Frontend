import React from 'react'
import { connect } from 'react-redux'
import { Form, Dropdown, Button } from 'semantic-ui-react'
import { gameCreation } from '../../reducers/gameReducer'

class GameForm extends React.Component {
    platform = null

    createGame = async (event) => {
        event.preventDefault()

        const content = {
            name: event.target.name.value,
            platform: this.platform,
            year: event.target.year.value,
            developers: event.target.developers.value,
            publishers: event.target.publishers.value
        }
        console.log(content)
        // this.props.gameCreation(content)
    }

    render() {
        const options = this.props.platforms.map(platform => ({
            key: platform.id,
            value: platform.id,
            text: platform.name
        }))

        return (
            <div>
                <h3>Create new</h3>
                <Form onSubmit={this.createGame}>
                    <Form.Field>
                        <label>Name</label>
                        <input name="name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Platform</label>
                        <Dropdown 
                            name="platform" 
                            placeholder="Select platform" 
                            fluid search selection options={options} 
                            onChange={(event, data) => this.platform = data.value}
                        /> 
                    </Form.Field>
                    <Form.Field>
                        <label>Year</label>
                        <input name="year" />
                    </Form.Field>
                    <Form.Field>
                        <label>Developers</label>
                        <input name="developers" />
                    </Form.Field>
                    <Form.Field>
                        <label>Publishers</label>
                        <input name="publishers" />
                    </Form.Field>
                    <Button type='submit'>Create</Button>
                </Form>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return { platforms: state.platforms }
}

const mapDispatchToProps = { gameCreation }

const ConnectedGameForm = connect(mapStateToProps, mapDispatchToProps) (GameForm)

export default ConnectedGameForm