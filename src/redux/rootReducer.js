import {combineReducers} from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducers = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducers