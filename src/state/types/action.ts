import { ActionType } from "../enums";
import { ProfileProps } from "./profile";

interface AddUserAction {
    type: ActionType.ADDUSER,
    payload: ProfileProps
}

interface RemoveUserAction {
    type: ActionType.REMOVEUSER,
    id: number
}

interface editUserAction {
    index: number,
    type: ActionType.EDITUSER,
    payload: ProfileProps
}

export type Action = AddUserAction | editUserAction | RemoveUserAction;