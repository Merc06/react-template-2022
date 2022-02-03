import { ActionType } from "../enums";
import { Action } from "../types/action";
import { ProfileProps } from "../types/profile";


const reducer = (state: Array<ProfileProps> = [], action: Action) => {
    switch (action.type) {
        case ActionType.ADDUSER:
            return state.concat(action.payload);
        
        case ActionType.REMOVEUSER:
            return state.filter((item) => item.id !== action.id);

        default:
            return state
    }
}

export default reducer;