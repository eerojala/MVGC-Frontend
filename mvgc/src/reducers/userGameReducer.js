import userGameService from '../services/userGames'

const userGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_USER_GAMES':
            return action.data
        case 'NEW_USER_GAME':
            return state.concat(action.data)
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

export default userGameReducer