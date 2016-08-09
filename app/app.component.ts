import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component ({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="main">
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Barely Brown's", "Pale Ale", 6.5, 5, 124, 0),
      new Keg("Sculpin", "Grapefruit IPA", 6.75, 6, 124, 1),
      new Keg("Deschuttes", "Chain Breaker White IPA", 6, 4, 124, 2),
      new Keg("Oscar Blues", "Dave's Pale Ale", 5.7, 4, 124, 3)
    ];
  }

}
