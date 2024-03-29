import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: './mainpage.component.html'
})

export class MainpageComponent  {

  constructor(private dbzService:DbzService){}

  get characters():Character[]{
    return[...this.dbzService.characters];
  }

  onDeleteCharacter(id : string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(chracter : Character):void{
    this.dbzService.addCharacter(chracter);
  }

  //Fiin
}
