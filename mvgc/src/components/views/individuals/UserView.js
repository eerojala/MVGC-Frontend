import React from 'react'
import { connect } from 'react-redux'
import GameCollectionTable from '../tables/GameCollectionTable'

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
                    <GameCollectionTable userId={user.id} />
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