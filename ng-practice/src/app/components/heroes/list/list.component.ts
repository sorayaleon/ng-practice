import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor']
  removedHero: string = '';

  deleteHero() {
    this.removedHero = this.heroes.pop() || '';
  }
}
