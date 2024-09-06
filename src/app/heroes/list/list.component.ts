import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
  ];
}
