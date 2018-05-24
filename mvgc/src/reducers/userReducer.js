import userService from '../services/users'

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_USERS':
            return action.data
        case 'NEW_USER':
            return state.concat(action.data)
        case 'REMOVE_GAME_FROM_USER_COLLECTION':
            const correctUser = state.find(user => user.id === action.data.userId)
            const games = correctUser.ownedGames.filter(userGame => userGame._id !== action.data.userGameId)
            correctUser.ownedGames = games
            state = state.filter(user => user.id !== correctUser.id)
            return state.concat(correctUser)
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

        console.log('Successfully registered a new account!')
        } catch (exception) {
            console.log('Error trying to register a new user')
            console.log(exception)
        }
    }
}

export const removeGameFromUsersCollection = (userId, userGameId) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_GAME_FROM_USER_COLLECTION',
            data: {
                userId,
                userGameId
            }
        })
    }
}

export default userReducer