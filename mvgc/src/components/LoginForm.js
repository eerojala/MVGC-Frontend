import React from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/loginReducer'

class LoginForm extends React.Component {
    sendLoginCredentials = async (event) => {
        event.preventDefault()

        const credentials = { 
            username: event.target.username.value,
            password: event.target.password.value 
        }

        event.target.username.value = ''
        event.target.password.value = ''

       this.props.login(credentials)
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

const mapDispatchToProps = { login }

const ConnectedLoginForm = connect(null, mapDispatchToProps) (LoginForm)

export default ConnectedLoginForm