export class Keg {
  public hasTenPints:boolean = true;
  constructor(public brewery: string, public beer: string, public abu: number, public price: number, public pintsLeft: number, public id: number){}
}
