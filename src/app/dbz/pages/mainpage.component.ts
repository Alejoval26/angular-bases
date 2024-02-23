import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: './mainpage.component.html'
})

export class MainpageComponent  {

  public characters:Character[] = [{
    name:'krillin',
    power:1000
  },{
    name:'Goku',
    power:9500
  },{
    name:'Vegetta',
    power:7500
  }];

  OnNewCharacter(character:Character):void{
    this.characters.push(character);
  }


}
