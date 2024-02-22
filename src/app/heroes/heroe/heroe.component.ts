import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name:string = 'Iron Man';
  public age: number=45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  public getHeroeDescription():string{
    return`${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='SpiderMan';
  }

  changeAge():void{
    this.age=50;
  }

  resetForm():void{
    this.name='Iron Man';
    this.age=45;
  }


}
