import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { userCreation } from '../../reducers/userReducer'
import { usernameValid, passwordValid } from '../../util/validityChecks'

class UserRegistrationForm extends React.Component {
    createUser = async (event) => {
        event.preventDefault()

        const usernames = this.props.users.map(user => user.username)
        const username = event.target.username.value
        const password = event.target.password.value
        const passwordRepeat = event.target.passwordRepeat.value

        if (usernameValid(username, usernames) && passwordValid(password, passwordRepeat)) {
            const content = {
                username: event.target.username.value,
                password: event.target.password.value
            }
    
            this.props.userCreation(content)
        }
    }

    render() {
        return (
            <div>
                <h3>Register a new MVGC user account</h3>
                <Form onSubmit={this.createUser}>
                    <Form.Field label="Username" name="username" control="input" />
                    <Form.Field label="Password" name="password" control="input" type="password" />
                    <Form.Field label="Repeat password" name="passwordRepeat" control="input" type="password" />
                    <Button type="submit">Register</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

const mapDispatchToProps = { userCreation }

export default connect(mapStateToProps, mapDispatchToProps) (UserRegistrationForm)