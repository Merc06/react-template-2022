
interface AddUserAction {
    type: "addUser",
    payload: object
}

type Action = AddUserAction;

const reducer = (state: Array<object>, action: Action) => {
    switch (action.type) {
        // case "addUser":
        //     return state + action.payload;
        
        // case "editUser":
        //     const newState = state.map(item => 
        //         item.
        //     );
        //     return state.map(item)

        default:
            return state
    }
}

export default reducer;