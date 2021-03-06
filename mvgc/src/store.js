import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import platformReducer from './reducers/platformReducer'
import gameReducer from './reducers/gameReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
import userGameReducer from './reducers/userGameReducer'
import notificationReducer from './reducers/notificationReducer'
import redirectReducer from './reducers/redirectReducer'

const reducer = combineReducers({
    platforms: platformReducer,
    games: gameReducer,
    loggedInUser: loginReducer,
    users: userReducer, 
    userGames: userGameReducer,
    notification: notificationReducer,
    redirect: redirectReducer
})

const store = createStore(
    reducer, 
    applyMiddleware(thunk)
)

export default store