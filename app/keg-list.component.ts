import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {BeerLevelPipe} from './beer-level.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [BeerLevelPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <div class="keg-container">
    <h1 class="item">Gangsta Tap List</h1>
    <div class="item2">
      <h3>Sort by beer level</h3>
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all" selected="selected">All Kegs</option>
        <option value="lessThanTenPints">Less than 10 pints remaining</option>
        <option value="moreThanTenPints">More than 10 pints remaining</option>
      </select>
    </div>
  </div>
  <div class="keg-container">
    <keg-display class="keg" *ngFor="#currentKeg of kegList | beerLevel:filterBeerLevel"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
  </div>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event.brewery, $event.beer, $event.abu, $event.price)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  public filterBeerLevel: string = "moreThanTenPints";
  constructor() {
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
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
