import { Dispatch } from "redux"
import { ActionType } from "../enums"
import { Action } from "../types/action"
import { ProfileProps } from "../types/profile"


export const addUserProfile = (item: ProfileProps) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADDUSER,
            payload: item
        })
    }
}

export const editUserProfile = (index: number, item: ProfileProps) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            index,
            type: ActionType.EDITUSER,
            payload: item
        })
    }
}