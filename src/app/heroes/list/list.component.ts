import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['Spider Man', 'Iron Man', 'Hulk', 'She Hulk', 'Thor'];
  public deleatedHeroe?: string;

  removeLastHeroe(): void{
    this.deleatedHeroe= this.heroeNames.pop();
    console.log(this.deleatedHeroe);
  }
}
