import React from 'react'
import { connect } from 'react-redux'
import { platformCreation } from '../reducers/platformReducer'

class PlatformForm extends React.Component {
    createPlatform = async (event) => {
        event.preventDefault()

        const content = {
            name: event.target.name.value,
            creator: event.target.creator.value,
            year: event.target.year.value
        }

        event.target.name.value = ''
        event.target.creator.value = ''
        event.target.year.value = ''

        this.props.platformCreation(content)
    }

    render() {
        return (
            <div>
                <h3>Create new</h3>
                <form onSubmit={this.createPlatform}>
                    <div>Name: <input name="name" /></div>
                    <div>Creator: <input name="creator" /></div>
                    <div>Year: <input name="year" /></div>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { platformCreation }

const ConnectedPlatformForm = connect(null, mapDispatchToProps) (PlatformForm)

export default ConnectedPlatformForm