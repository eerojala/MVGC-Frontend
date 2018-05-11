import React from 'react'
import { connect } from 'react-redux'

class UsersList extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
                <ul>
                    {this.props.users.map(user => <li key={user.id}>{user.username}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps) (UsersList)