import { SpaceAge } from './../js/galacticAge.js';

describe('SpaceAge' , function() {
  var moment = require('moment');
  var spaceAge;
  var inputtedDate;
  var date;
  var currentDate;


  beforeEach(function() {
    inputtedDate = "1981-04-14";
    spaceAge = new SpaceAge(inputtedDate);
    date = moment(inputtedDate);
    currentDate = moment();
  });

  it('should test whether test returns diffrence in dates', function() {
    let expected = currentDate.diff(inputtedDate, 'seconds');
    expect(spaceAge.getCalculatedDateInSeconds()).toEqual(expected);
  });



});
