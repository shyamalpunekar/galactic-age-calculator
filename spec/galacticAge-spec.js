import {
  SpaceAge
} from './../js/galacticAge.js';

describe('SpaceAge', function () {
  var moment = require('moment');
  var spaceAge;
  var inputtedDate;
  var date;
  var currentDate;

  beforeEach(function () {
    inputtedDate = "1981-04-14";
    spaceAge = new SpaceAge(inputtedDate);
    date = moment(inputtedDate);
    currentDate = moment();
  });

  it('should test whether test returns difference in dates', function () {
    let expected = currentDate.diff(inputtedDate, 'seconds');
    expect(spaceAge.getCalculatedDateInSeconds()).toEqual(expected);
  });

  it('should test whether it returns mercury seconds', function () {
    let expected = currentDate.diff(inputtedDate, 'seconds');
    let expexctedSpaceAge = spaceAge.covertToYearsDays(expected * 0.24);
    expect(spaceAge.getMercuryAge(expected)).toEqual(expexctedSpaceAge);
  });

  it('should test whether it returns venus seconds', function () {
    let expected = currentDate.diff(inputtedDate, 'seconds');
    let expexctedSpaceAge = spaceAge.covertToYearsDays(expected * 0.62);
    expect(spaceAge.getVenusAge(expected)).toEqual(expexctedSpaceAge);
  });

  it('should test whether returns mars seconds', function () {
    let expected = currentDate.diff(inputtedDate, 'seconds');
    let expexctedSpaceAge = spaceAge.covertToYearsDays(expected * 1.88);
    expect(spaceAge.getMarsAge(expected)).toEqual(expexctedSpaceAge);
  });

  it('should test whether it return jupiter seconds', function () {
    let expected = currentDate.diff(inputtedDate, 'seconds');
    let expexctedSpaceAge = spaceAge.covertToYearsDays(expected * 11.86);
    expect(spaceAge.getJupiterAge(expected)).toEqual(expexctedSpaceAge);
  });
});
