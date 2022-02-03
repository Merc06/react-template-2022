import { combineReducers } from "redux";
import profileReducer from "./profileReducer";


const reducers = combineReducers({
    profiles: profileReducer
})

export default reducers;

export type ProfilesState = ReturnType<typeof reducers>