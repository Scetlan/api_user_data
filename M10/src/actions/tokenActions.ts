import { Action, SET_TOKEN } from "../../store";

// Генератор экшена
export const setToken = (token: string): Action => ({
    type: SET_TOKEN,
    payload: {
        token
    },
});