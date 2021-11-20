import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ]

  new: Character = {
    name: '',
    power: 0
  }

  add() {
    if(this.new.name.trim().length === 0) {
      //Exits the method
      return;
    }
    console.log(this.new)
    this.characters.push(this.new);
    this.new = {
      name: '',
      power:0
    }
  }
}
