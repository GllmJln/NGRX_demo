import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { fetchHeroes, fetchHeroesFailed, fetchHeroesSuccess } from './hero.actions';

@Injectable()
export class HeroesEffects {
  Heroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchHeroes),
      switchMap(() =>
        this.heroService.getHeroes().pipe(
          map(hero => fetchHeroesSuccess({ payload: hero as Hero[] })),
          catchError(e => of(fetchHeroesFailed({ payload: e })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
