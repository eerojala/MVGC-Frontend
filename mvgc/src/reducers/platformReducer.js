import platformService from '../services/platforms'

const platformReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_PLATFORM':
            return state.concat(action.data)
        case 'INIT_PLATFORMS':
            return action.data
        default:
            return state
    }
}

export const platformCreation = (content) => {
    return async (dispatch) => {
        const newPlatform = await platformService.create(content)

        dispatch({
            type: 'NEW_PLATFORM',
            data: newPlatform
        })
    }
}

export const platformInit = (data) => {
    return async (dispatch) => {
        const platforms = await platformService.getAll()
        
        dispatch({
            type: 'INIT_PLATFORMS',
            data: platforms
        })
    }
}