import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { State } from 'src/app/store';
import { fetchHeroes } from 'src/app/store/hero/hero.actions';
import { selectTop5Heroes } from 'src/app/store/hero/hero.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchHeroes());
  }

  get heroes$(): Observable<Hero[]> {
    return this.store.pipe(select(selectTop5Heroes));
  }
}
