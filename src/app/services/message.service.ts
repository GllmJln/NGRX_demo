import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { State } from '../store';
import { AddMessage, ClearMessage } from '../store/message/message.actions';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private store: Store<State>) {}

  get messages$() {
    return this.store.select('messages').pipe(map(messages => messages.messages));
  }

  add(message: string) {
    this.store.dispatch(new AddMessage(message));
  }

  clear() {
    this.store.dispatch(new ClearMessage());
  }
}
