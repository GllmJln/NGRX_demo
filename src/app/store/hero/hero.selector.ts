import { createSelector } from '@ngrx/store';
import { heroesFeatureState, heroStateAdapter } from './hero.reducer';

const { selectIds, selectEntities, selectAll, selectTotal } = heroStateAdapter.getSelectors();

// select the array of ids
export const selectHeroesIds = createSelector(heroesFeatureState, state => selectIds(state));

// select the dictionary of heroes entities
export const selectHeroesEntities = createSelector(heroesFeatureState, state => selectEntities(state));

// select the array of heroes
export const selectAllHeroes = createSelector(heroesFeatureState, state => selectAll(state));

// select the total heroes count
export const selectHeroesTotal = createSelector(heroesFeatureState, state => selectTotal(state));

export const selectHeroesLoadingState = createSelector(heroesFeatureState, state => state.loading);

export const selectTop5Heroes = createSelector(selectAllHeroes, state => state.slice(1, 5));
