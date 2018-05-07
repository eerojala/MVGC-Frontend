import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import platformReducer from './reducers/platformReducer'
import gameReducer from './reducers/gameReducer'

const reducer = combineReducers({
    platforms: platformReducer,
    games: gameReducer
})

const store= createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store