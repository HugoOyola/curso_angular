import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizaName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }
}
