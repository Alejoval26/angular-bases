import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: './mainpage.component.html'
})

export class MainpageComponent  {

  constructor(public dbzService:DbzService){
    dbzService.characters
}

}
