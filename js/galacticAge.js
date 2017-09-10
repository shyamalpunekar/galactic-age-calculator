import  moment  from './../node_modules/moment/moment.js';

export class SpaceAge {
  constructor (dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    this.dateInSeconds = this.getCalculatedDateInSeconds();
  }

convertStringToDate() {
  let moment = require('moment');
  let date = moment(this.dateOfBirth);
  return date;
}

getCalculatedDateInSeconds(){
  let date = this.convertStringToDate();
  let currentDateTime = moment();

  let covertedDate = currentDateTime.diff(date,'seconds');

    return covertedDate;
}

  getEarthAge(){
    return this.covertToYearsDays(this.dateInSeconds);
  }

  getMercuryAge(){
    let mercuryAgeInSeconds = this.dateInSeconds * 0.24;
    return this.covertToYearsDays(mercuryAgeInSeconds);
  }

  getVenusAge(){
   let venusAgeInSeconds = this.dateInSeconds * 0.62;
   return this.covertToYearsDays(venusAgeInSeconds);
  }

  getMarsAge(dateInSeconds){
    let marsAgeInSeconds = this.dateInSeconds * 1.88;
    return this.covertToYearsDays(marsAgeInSeconds);
  }

  getJupiterAge(dateInSeconds){
   let jupiterAgeInSeconds = this.dateInSeconds * 11.86;
   return this.covertToYearsDays(jupiterAgeInSeconds);
  }

  covertToYearsDays(dateInSeconds){
    let moment = require('moment');
    const yearDays = 365;
    let days = moment.duration(dateInSeconds,'seconds').asDays();
    let numYears = days/yearDays;
    let numDays = days % yearDays;
    let calculatedSpaceAge = [numYears,numDays];
    return calculatedSpaceAge;
  }

}
