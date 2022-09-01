import { Action } from '@ngrx/store';

/**
 * The message store feature is purposefully done the "old fashioned way".
 * It can be helpul to show this way in both the actions and reducer to provide a better understanding of the underlying logic
 * which has been abstracted behind helper functions/methods in more recent implementations of ngrx.
 * See the message.actions.ts and message.reducer.ts files for the implementation.
 * The message store feature is purposely abstracted in the a service in the message.service.ts file to demonstrate
 * a possible case use for services whilst using ngrx.
 * The store feature purposefully does not use selectors.
 */

export const ADD_MESSAGE_TYPE = '[MESSAGING] adding a message';
export const CLEAR_MESSAGE_TYPE = '[MESSAGING] clearing messages';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE_TYPE;
  constructor(public payload: string) {}
}

export class ClearMessage implements Action {
  readonly type = CLEAR_MESSAGE_TYPE;
}
