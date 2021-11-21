import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() new: Character = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzService){}

 // @Output() onNewCaharacter: EventEmitter<Character> = new EventEmitter();

  add() {
    if(this.new.name.trim().length === 0) {
      //Exits the method
      return;
    }

    //this.onNewCaharacter.emit(this.new);

    this.dbzService.addCharacter(this.new);

    this.new = {
      name: '',
      power:0
    }
  }

}
