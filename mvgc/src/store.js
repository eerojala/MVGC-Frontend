import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import platformReducer from './reducers/platformReducer'
import gameReducer from './reducers/gameReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    platforms: platformReducer,
    games: gameReducer,
    login: loginReducer,
    users: userReducer, 
})

const store = createStore(
    reducer, 
    applyMiddleware(thunk)
)

export default store