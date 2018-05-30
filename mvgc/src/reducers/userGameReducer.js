import userGameService from '../services/userGames'

const userGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_USER_GAMES':
            return action.data
        case 'NEW_USER_GAME':
            return state.concat(action.data)
        case 'UPDATE_USER_GAME':
            const userGames = state.filter(userGame => userGame.id !== action.data.id)
            return userGames.concat(action.data)
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
            let newUserGame = await userGameService.create(content)
            newUserGame = await userGameService.getOne(newUserGame.id) // Try to make a more elegant solution, like POST /api/usergames populating on return or something

            dispatch({
                type: 'NEW_USER_GAME',
                data: newUserGame
            })

            return newUserGame
        } catch (exception) {
            console.log(exception)
            return null
        }
    }
}

export const userGameUpdate = (id, content) => {
    return async (dispatch) => {
        try {
            await userGameService.update(id, content)
            const updatedUserGame = await userGameService.getOne(id) // Same as the function above

            dispatch({
                type: 'UPDATE_USER_GAME',
                data: updatedUserGame
            })

            return updatedUserGame
        } catch (exception) {
            console.log(exception)
            return null
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

            return true
        } catch (exception) {
            console.log(exception)
            return false
        }
    }
}

export default userGameReducer