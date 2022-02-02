import { ActionType } from "../enums";
import { Action } from "../types/action";
import { ProfileProps } from "../types/profile";


const reducer = (state: Array<ProfileProps> = [], action: Action) => {
    switch (action.type) {
        case ActionType.ADDUSER:
            return state.push(action.payload);
        
        // case ActionType.EDITUSER:
        //     const newState = state.map(item => 
        //         item.
        //     );
        //     return state.map(item)

        default:
            return state
    }
}

export default reducer;