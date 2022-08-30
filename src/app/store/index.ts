import { ActionReducerMap } from '@ngrx/store';
import { heroReducer, HeroState, initialHeroState, STORE_HERO_STATE } from './hero/hero.reducer';
import { initialMessageState, messageReducer, MessageState, STORE_MESSAGE_KEY } from './message/message.reducer';

export interface State {
  [STORE_HERO_STATE]: HeroState;
  [STORE_MESSAGE_KEY]: MessageState;
}

export const initialAppState = {
  [STORE_HERO_STATE]: initialHeroState,
  [STORE_MESSAGE_KEY]: initialMessageState
};

export const reducers: ActionReducerMap<State> = {
  [STORE_HERO_STATE]: heroReducer,
  [STORE_MESSAGE_KEY]: messageReducer
};
