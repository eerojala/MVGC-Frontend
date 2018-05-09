import loginService from '../services/login'

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
        const user = await loginService.login(credentials)

        dispatch({
            type: 'LOGIN',
            user: user
        })
    }
}

export default loginReducer