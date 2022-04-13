import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../Hero'
import { MessageService } from '../../services/message.service' 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      delete this.selectedHero
      this.messageService.clear()
    } else {
      this.selectedHero=hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

}
