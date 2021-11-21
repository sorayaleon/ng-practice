import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  new: Character = {
    name: 'Maestro Roshi',
    power: 1000
  }

  // get characters(): Character[] {
  //   return this.DbzService.characters;
  // }

  // addNewCharacter(param: Character) {
  //   this.characters.push(param);
  // }

  constructor() {
  }
}
