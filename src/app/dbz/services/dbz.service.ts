import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'

console.log(uuid())

@Injectable({
  providedIn: 'root'
})


export class DbzService {
  constructor() { }

  public characters:Character[] = [{
    id: uuid(),
    name:'krillin',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegetta',
    power:7500
  }];

  addCharacter(character:Character):void{
    const newCharacter: Character = {...character,id: uuid()}

    this.characters.push(newCharacter);

    console.log(newCharacter)
  }

  deleteCharacterById(id:string):void{
    //TODO EMITIR EL IDE DEL PERSONAJE
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
