import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/Hero';

export const fetchHeroes = createAction('[API/Heroes] get heroes');
export const fetchHeroesSuccess = createAction('[API/Heroes] get heroes success', props<{ payload: Hero[] }>());
export const fetchHeroesFailed = createAction('[API/Heroes] get heroes failed', props<{ payload: string }>());
