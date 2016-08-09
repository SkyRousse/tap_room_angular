import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
  <div class="keg-form">
    <h3>Add Keg:</h3>
    <input type="text" placeholder="Brewery" class="" #newBrewery>
    <input type="text" placeholder="Beer" class="" #newBeer>
    <input type="number" placeholder="ABU" class="" #newABU>
    <input type="number" placeholder="Price" class="" #newPrice>
    <button (click)="addKeg(newBrewery, newBeer, newABU, newPrice)" class="btn-add-keg">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(inputBrewery: HTMLInputElement, inputBeer: HTMLInputElement, inputABU: HTMLInputElement, inputPrice: HTMLInputElement){
    this.onSubmitNewKeg.emit({brewery: inputBrewery.value,
       beer: inputBeer.value,
       abu: parseFloat(inputABU.value).toFixed(1),
       price: parseFloat(inputPrice.value).toFixed(2)});
    inputBrewery.value = '';
    inputBeer.value = '';
    inputABU.value = '';
    inputPrice.value = '';
  }
}
