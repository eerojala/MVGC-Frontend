import userGameService from '../services/userGames'

const userGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_USER_GAMES':
            return action.data
        case 'NEW_USER_GAME':
            return state.concat(action.data)
        case 'REMOVE_USER_GAME':
            const id = action.data
            return state.filter(userGame => userGame.id !== id)
        default:
            return state
    }
}

export const userGameInit = (data) => {
    return async (dispatch) => {
        const userGames = await userGameService.getAll()

        dispatch({
            type: 'INIT_USER_GAMES',
            data: userGames
        })
    }
}

export const userGameCreation = (content) => {
    return async (dispatch) => {
        try {
            const newUserGame = await userGameService.create(content)

            dispatch({
                type: 'NEW_USER_GAME',
                data: newUserGame
            })

            console.log('Successfully added game to your collection!')
        } catch (exception) {
            console.log('Error trying to add game to collection')
            console.log(exception)
        }
    }
}

export const userGameRemoval = (id) => {
    return async (dispatch) => {
        try {
            await userGameService.remove(id)

            dispatch({
                type: 'REMOVE_USER_GAME',
                data: id
            })

            console.log('Successfully removed user game collection entry from the server!')
        } catch (exception) {
            console.log('Error trying to remove user game collection entry from the server')
            console.log(exception)
        }
    }
}

export default userGameReducer