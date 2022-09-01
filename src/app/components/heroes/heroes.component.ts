import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import { State } from 'src/app/store';
import { fetchHeroes } from 'src/app/store/hero/hero.actions';
import { selectAllHeroes } from 'src/app/store/hero/hero.selector';
import { Hero } from '../../Hero';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private store: Store<State>) {}
  heroName: string = '';

  ngOnInit(): void {
    this.store.dispatch(fetchHeroes());
  }

  get heroes(): Observable<Hero[]> {
    return this.store.pipe(select(selectAllHeroes));
  }
}
