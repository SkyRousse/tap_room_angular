import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div [class.highPrice]='keg.price > 5' [class.highABU]='keg.abu > 5'>
    <h3>{{ keg.brewery + " " + keg.beer + " (ABU: " + keg.abu + ")" }}</h3>
    <h5>{{ "Price: $" + keg.price }}</h5>
    <h5>{{ "Pints Left: " + keg.pintsLeft }}</h5>
    <button (click)="minusOne()">Subtract Pint</button>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  minusOne(){
    this.keg.pintsLeft -= 1;
    if (this.keg.pintsLeft < 10) {
      this.keg.hasTenPints = false;
    }
  }
}
