import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import { notification } from '../../reducers/notificationReducer'

class LoginForm extends React.Component {
    sendLoginCredentials = async (event) => {
        event.preventDefault()

        const credentials = { 
            username: event.target.username.value,
            password: event.target.password.value 
        }

        event.target.username.value = ''
        event.target.password.value = ''

        const user = await this.props.login(credentials)
        
        if (user !== null) {
            this.props.notification('Login successful!', `Successfully logged in as ${user.username}`)
        } else {
            this.props.notification('Login failed', 'Incorrect username or password')
        }
    }

    render() {
        return (
            <div>
                <h2>Log in to MVGC</h2>
                <form onSubmit={this.sendLoginCredentials}>
                    <div>Username: <input name="username" /></div>
                    <div>Password: <input name="password" type="password" /></div>     
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { login, notification }

export default connect(null, mapDispatchToProps) (LoginForm)