import userService from '../services/users'

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_USERS':
            return action.data
        case 'NEW_USER':
            return state.concat(action.data)
        default:
            return state
    }
}

export const userInit = (data) => {
    return async (dispatch) => {
        const users = await userService.getAll()

        dispatch({
            type: 'INIT_USERS',
            data: users
        })
    }
}

export const userCreation = (content) => {
    return async (dispatch) => {
        try {
            const newUser = await userService.create(content)

            dispatch({
                type: 'NEW_USER',
                data: newUser
            })
        } catch (exception) {
            console.log('Error trying to register a new user')
            console.log(exception)
        }
    }
}

export default userReducer