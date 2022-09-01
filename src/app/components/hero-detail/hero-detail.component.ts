import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { State } from 'src/app/store';
import { select, Store } from '@ngrx/store';
import { selectOneHeroById } from 'src/app/store/hero/hero.selector';
import { Observable } from 'rxjs';
import { fetchHeroes } from 'src/app/store/hero/hero.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchHeroes());
  }

  get hero$(): Observable<Hero | undefined> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.store.pipe(select(selectOneHeroById(id)));
  }

  goBack(): void {
    this.location.back();
  }
}
