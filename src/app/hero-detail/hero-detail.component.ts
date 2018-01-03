import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../entities/hero';

// Get Active Route && Location of the Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Hero Service to get heroes!
import { HeroService }  from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;

  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}


  ngOnInit() {
    this.getHero();
  }

  // Get Hero informations with id (Snapshot : image of the route at the component render)
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  // Navigate Back to previous page (Location get previous page)
  goBack(): void {
  this.location.back();
  }


  // Save the name of the hero
  save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
 }

}
