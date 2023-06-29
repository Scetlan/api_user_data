import { ActionCreator } from "redux";
import { SetTokenAction, SET_TOKEN } from "../../store";

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
});