import { ActionCreator, AnyAction, combineReducers, Reducer } from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type RootState = {
    commentText: string;
}

const initialState: RootState = {
    commentText: 'привет мир',
}


//корневой редьюсер
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})

export const rootRecucer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        //здесь создается новый объект с новыми данными
        case UPDATE_COMMENT:
        return {
            ...state,
            commentText: action.text,
        }
            break;

        default:
            return state;
    }

}

