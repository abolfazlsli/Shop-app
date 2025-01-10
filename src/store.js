// import { } from "react-redux"
import {createStore , combineReducers} from "redux"
import {stateHandler} from "./reducers/userInformation"



const rootData = combineReducers(
    {
        userinfo:stateHandler
    }
)

export default createStore(rootData)