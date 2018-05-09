import React from 'react'
import { connect } from 'react-redux'

class PlatformsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Platforms</h2>
                <ul>
                    {this.props.platforms.map(platforms => <li key={platforms.id}>{platforms.name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { platforms: state.platforms }
}

const ConnectedPlatformsList = connect(mapStateToProps) (PlatformsList)

export default ConnectedPlatformsList