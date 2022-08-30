import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
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
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private store: Store<State>) {}
  show: boolean = false;
  heroName: string = '';

  ngOnInit(): void {
    this.store.dispatch(fetchHeroes());
  }

  getHeroes(): void {
    this.store.pipe(select(selectAllHeroes)).subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    this.show = !this.show;
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
