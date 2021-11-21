import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  //@Input() characters: Character[] = [];
  //If I want to change the name I can put it inside the (). In the example it would be data
  //@Input('data') characters: any[] = [];

  get characters() {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService){
  }
}
