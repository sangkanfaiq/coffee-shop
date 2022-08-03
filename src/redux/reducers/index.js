import { combineReducers } from "redux"
import Auth from './Auth'
import Register from './Register'

const rootReducer = combineReducers ({
    auth: Auth,
    register: Register,
})

export default rootReducer