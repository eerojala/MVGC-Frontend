import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import platformReducer from './reducers/platformReducer'
import gameReducer from './reducers/gameReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
    platforms: platformReducer,
    games: gameReducer,
    login: loginReducer
})

const store = createStore(
    reducer, 
    applyMiddleware(thunk)
)

export default store