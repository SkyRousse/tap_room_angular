import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template:`
    <div class="keg-form">
      <h3>Edit Keg: </h3>
      <input [(ngModel)]="keg.brewery"/>
      <input [(ngModel)]="keg.beer"/>
      <input [(ngModel)]="keg.abu"/>
      <input [(ngModel)]="keg.price"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
