const notificationReducer = (state= null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'HIDE_NOTIFICATION':
            return null
        default:  
            return state
    }
}

export const notification = (header, message) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: { header, message } 
        })

        setTimeout(() => {
            dispatch({
                type: 'HIDE_NOTIFICATION'
            })
        }, 4000)
    }
}

export default notificationReducer