import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "beerLevel",
  pure: false
})
export class BeerLevelPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredBeerLevel = args[0];
    if(desiredBeerLevel === 'moreThanTenPints') {
      return input.filter((keg) => {
        return keg.hasTenPints;
      });
    } else if (desiredBeerLevel === "lessThanTenPints") {
      return input.filter((keg) => {
        return !keg.hasTenPints;
      });
    } else {
      return input;
    }
  }
}
