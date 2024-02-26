import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Console } from 'console';
import { findIndex } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterlist: Character[]=[]


  @Output()
  public onDelete: EventEmitter <number> =new EventEmitter();


  onDeleteCharacter(index:number):void{
    //TODO EMITIR EL IDE DEL PERSONAJE
    this.onDelete.emit(index);
  }
}
