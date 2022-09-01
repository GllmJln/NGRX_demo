import { Action } from '@ngrx/store';
import * as MessageActions from './message.actions';
export const STORE_MESSAGE_KEY = 'messages';

/**
 * The message store feature is purposefully done the "old fashioned way".
 * It can be helpul to show this way in both the actions and reducer to provide a better understanding of the underlying logic
 * which has been abstracted behind helper functions/methods in more recent implementations of ngrx.
 * See the message.actions.ts and message.reducer.ts files for the implementation.
 * The message store feature is purposely abstracted in the a service in the message.service.ts file to demonstrate
 * a possible case use for services whilst using ngrx.
 * The store feature purposefully does not use selectors.
 */

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
