import { Action } from '@ngrx/store';

export const ADD_MESSAGE_TYPE = '[MESSAGING] adding a message';
export const CLEAR_MESSAGE_TYPE = '[MESSAGING] clearing messages';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE_TYPE;
  constructor(public payload: string) {}
}

export class ClearMessage implements Action {
  readonly type = CLEAR_MESSAGE_TYPE;
}
