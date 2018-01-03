import { Injectable } from '@angular/core';
import { Hero } from '../../entities/hero';
import { HEROES } from '../../mock/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from '../messages/message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: heroes fetching...');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);

  // Predicate : We want to find the hero which have this id
  return of(HEROES.find(hero => hero.id === id));
}

}
