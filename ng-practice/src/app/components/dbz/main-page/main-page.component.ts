import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
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
    name: 'Maestro Roshi',
    power: 1000
  }


  addNewCharacter(param: Character) {
    this.characters.push(param);
  }

  constructor(private DbzService: DbzService) {

  }
}
