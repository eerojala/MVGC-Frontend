import gameService from '../services/games'

const gameReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAMES':
            return action.data
        case 'NEW_GAME':
            return state.concat(action.data)
        default:
            return state
    }
}

export const gameInit = (data) => {
    return async (dispatch) => {
        const games = await gameService.getAll()

        dispatch({
            type: 'INIT_GAMES',
            data: games
        })
    }
}

export const gameCreation = (content) => {
    return async (dispatch) => {
        try {
            const newGame = await gameService.create(content)

            dispatch ({
                type: 'NEW_GAME',
                data: newGame
            })
        } catch (exception) {
            console.log('Error trying to create a new game')
            console.log(exception)
        }
    }
}

export default gameReducer