import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/Hero';
import { fetchHeroes, fetchHeroesFailed, fetchHeroesSuccess } from './hero.actions';

export const STORE_HERO_STATE = 'heroes';

export interface HeroState extends EntityState<Hero> {
  loading: boolean;
}

export const heroStateAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialHeroState = heroStateAdapter.getInitialState({ loading: false });

export const heroesFeatureState = createFeatureSelector<HeroState>(STORE_HERO_STATE);

export const heroReducer = createReducer(
  initialHeroState,
  on(fetchHeroes, state => ({ ...state, loading: true })),
  on(fetchHeroesSuccess, (state, action) => ({ ...heroStateAdapter.setAll(action.payload, state), loading: false })),
  on(fetchHeroesFailed, (state, action) => ({ ...heroStateAdapter.setAll([], state), loading: false }))
);
