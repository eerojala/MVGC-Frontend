import platformService from '../services/platforms'

const platformReducer = (state =[], action) => {
    switch (action.type) {
        case 'INIT_PLATFORMS':
            return action.data
        case 'NEW_PLATFORM':
            return state.concat(action.data)
        default:
            return state
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

export const platformCreation = (content) => {
    return async (dispatch) => {
        try {
            const newPlatform = await platformService.create(content)

            dispatch({
                type: 'NEW_PLATFORM',
                data: newPlatform
            })
        } catch (exception) {
            console.log('Error trying to create a new platform')
            console.log(exception)
        }
    }
}
 
export default platformReducer