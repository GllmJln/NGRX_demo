import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { State } from '../store';
import { AddMessage, ClearMessage } from '../store/message/message.actions';

/**
 * The message store feature is purposefully done the "old fashioned way".
 * It can be helpul to show this way in both the actions and reducer to provide a better understanding of the underlying logic
 * which has been abstracted behind helper functions/methods in more recent implementations of ngrx.
 * See the message.actions.ts and message.reducer.ts files for the implementation.
 * The message store feature is purposely abstracted in the a service in the message.service.ts file to demonstrate
 * a possible case use for services whilst using ngrx.
 * The store feature purposefully does not use selectors.
 */

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private store: Store<State>) {}

  get messages$(): Observable<string[]> {
    return this.store.select('messages').pipe(map(store => store.messages));
  }

  add(message: string) {
    this.store.dispatch(new AddMessage(message));
  }

  clear() {
    this.store.dispatch(new ClearMessage());
  }
}
