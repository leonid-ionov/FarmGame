import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import goodsReducer from './GoodsReducer'
import creaturesReducer from './CreaturesReducer'
import gameReducer from './GameReducer'
import fieldReducer from './FieldReducer'


const appReducers = combineReducers({
        goodsReducer: goodsReducer,
        creaturesReducer: creaturesReducer,
        gameReducer: gameReducer,
        fieldReducer: fieldReducer
    }),

    START_NEW_GAME = 'START_NEW_GAME',

    rootReducer = (state = appReducers, action) => {
        if (action.type === START_NEW_GAME) {
            state = undefined
        }
        return appReducers(state, action)
    },

    store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const startNewGame = () => ({type:START_NEW_GAME})

window.__store = store

export default store