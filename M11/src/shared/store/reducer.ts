
import { Reducer } from "redux";
import { IUserData, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";

export type MeState = {
    loading: boolean,
    error: string,
    data: IUserData
}
type MeActions = MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;

export const meRequest: Reducer<MeState, MeActions> = (state, action) => {
    switch (action.type) {
        case ME_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ME_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
            }
        case ME_REQUEST_SUCCESS:
            return {
                ...state,
                date: action.data,
            }
        default:
            return state;
    }
}