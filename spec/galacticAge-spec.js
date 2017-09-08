var SpaceAge = require('./../js/galacticAge.js').spaceAgeModule;

describe('Galactic' , function() {

  it('should test whether a user entered correct input', function() {
    var galactic = new SpaceAge(200);
    expect(galactic.ageInSeconds).toEqual(200)
  });

});
