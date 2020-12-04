import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import themeReducer from './themes/themeReducer'
// import userLogoReducer from './userLogo/userLogoReducer'

const rootReducers = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    theme:themeReducer,
})

export default rootReducers