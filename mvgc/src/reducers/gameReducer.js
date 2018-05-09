import gameService from '../services/games'

const gameReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_GAMES':
            return action.data
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

export default gameReducer