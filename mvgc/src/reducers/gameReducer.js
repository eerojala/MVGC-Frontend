import gameService from '../services/games'

const gameReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_GAME':
            return state.concat(action.data)
        case 'INIT_GAMES':
            return action.data
        default:
            return state
    }
}

export const gameCreation = (content) => {
    return async (dispatch) => {
        const newGame = await gameService.create(content)
        dispatch({
            type: 'NEW_GAME',
            data: newGame
        })
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

export default gameReducer