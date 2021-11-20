import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 45;

  get nameCapitalized() {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

}
