import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroNames: string[]= ['Spiderman','Ironman','Hulk','She Hulk','Thor']
public deletedHero?:string ;

removeLastHeroe():void {
  this.deletedHero = this.heroNames.pop();

  }

}
