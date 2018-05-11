import React from 'react'
import { connect } from 'react-redux'

class PlatformView extends React.Component {
    render () {
        const { platform } = this.props

        if (platform === null || platform === undefined) {
            return null
        }

        return (
            <div key={platform.id}>
                <h2>{platform.name}</h2>
                <div>
                    <p>Creator: {platform.creator}</p>
                    <p>Year: {platform.year}</p>
                    <br />
                </div>
                <div>
                    <h3>Games: </h3>
                    <ul>
                        {platform.games.map(game => <li key={game._id}>{game.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { platformId } = props

    if (state.platforms === null) {
        return { platform: null }
    }

    return {
        platform: state.platforms.find(platform => platform.id === platformId)
    }
}

export default connect(mapStateToProps) (PlatformView)