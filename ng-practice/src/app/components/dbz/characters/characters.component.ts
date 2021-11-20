import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  @Input() characters: Character[] = [];
  //If I want to change the name I can put it inside the (). In the example it would be data
  //@Input('data') characters: any[] = [];
}
