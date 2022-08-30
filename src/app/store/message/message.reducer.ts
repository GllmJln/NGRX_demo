import { Action } from '@ngrx/store';
import * as MessageActions from './message.actions';
export const STORE_MESSAGE_KEY = 'messages';

export interface MessageState {
  messages: string[];
}

export const initialMessageState: MessageState = {
  messages: []
};

export function messageReducer(state = initialMessageState, action: any) {
  switch (action.type) {
    case MessageActions.ADD_MESSAGE_TYPE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case MessageActions.CLEAR_MESSAGE_TYPE:
      return {
        ...state,
        messages: []
      };
    default:
      return { ...state };
  }
}
