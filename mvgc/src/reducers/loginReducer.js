import loginService from '../services/login'
import platformService from '../services/platforms'

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user
        default:
            return state
    }
}

export const login = (credentials) => {
    return async (dispatch) => {
        try {
            const user = await loginService.login(credentials)

            window.localStorage.setItem('loggedinUser', JSON.stringify(user))
            platformService.setToken(user.token)
            console.log('Successfully logged in!')
            
            dispatch({
                type: 'LOGIN',
                user: user
            })
        } catch (exception) {
            console.log('Login failed')
        }
    }
}

export default loginReducer