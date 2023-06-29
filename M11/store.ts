import { ActionCreator, AnyAction, applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./src/shared/store/me/actions";
import { meRequest } from './src/shared/store/reducer';
import { MeState } from './src/shared/store/reducer'

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export interface RootState {
  token: string,
  commentText: string,
  me: MeState
}

const initialState: RootState = {
  token: '',
  commentText: '',
  me: {
    loading: false,
    error: '',
    data: {

    }
  }
}

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
})

export const SET_TOKEN = "SET_TOKEN";

export interface SetTokenAction {
  type: typeof SET_TOKEN;
  token: string;
}

// Редьюсер для обработки экшена setToken

export type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;

export const rootReducer: Reducer<MeState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    //здесь создается новый объект с новыми данными
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meRequest(state, action)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));
export default store;