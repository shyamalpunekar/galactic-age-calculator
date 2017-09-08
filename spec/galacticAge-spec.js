var SpaceAge = require('./../js/galacticAge.js').spaceAgeModule;

describe('Galactic' , function() {

  it('should test whether a user entered correct input', function() {
    var galactic = new SpaceAge(200);
    expect(galactic.ageInSeconds).toEqual(200)
  });

  it('should correctly determine whether user inputted age converted into seconds correctly', function() {
    var galacticUserInputtedAge = new SpaceAge(22);
    expect(galacticUserInputtedAge.spaceAgeInSeconds()).toEqual(693792000);
  });

});
