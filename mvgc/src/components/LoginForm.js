import React from 'react'

const LoginForm = (props) => {
    return (
        <div>
            <h2>Log in to MVGC</h2>
            <form onSubmit={props.login}>
                <div>
                    Username: 
                    <input 
                        type="text"
                        name="username"
                        value={props.username}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <div>
                    Password:
                    <input 
                        type="text"
                        name="password"
                        value={props.password}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LoginForm