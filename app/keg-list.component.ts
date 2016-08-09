import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
// import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {BeerLevelPipe} from './beer-level.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [BeerLevelPipe],
  directives: [KegComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">All Kegs</option>
    <option value="lessThanTenPints">Less than 10 pints remaining</option>
    <option value="moreThanTenPints">More than 10 pints remaining</option>
  </select>

  <keg-display *ngFor="#currentKeg of kegList | beerLevel:filterBeerLevel"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event.brewery, $event.beer, $event.abu, $event.price)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterBeerLevel: string = "moreThanTenPints";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(brewery: string,  beer: string,  abu: number,  price: number): void {
    this.kegList.push(
      new Keg(brewery, beer, abu, price, 124, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterBeerLevel = filterOption;
    console.log(this.filterBeerLevel);
  }
}
