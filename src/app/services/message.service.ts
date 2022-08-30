import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { State } from '../store';
import { AddMessage, ClearMessage } from '../store/message/message.actions';

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
