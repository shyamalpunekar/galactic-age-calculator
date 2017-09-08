function SpaceAge(seconds) {
  this.ageInSeconds = seconds;
}

SpaceAge.prototype.spaceAgeInSeconds= function(userAge) {
  var outputAge;
  var EARTH_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
  outputAge = userAge * EARTH_YEARS_IN_SECONDS;
   return outputAge;
};

SpaceAge.prototype.getSeconds = function () {
    return this.ageInSeconds;
};

SpaceAge.prototype.onEarth = function () {
    return this.ageInSeconds / SpaceAge.EARTH_YEARS_IN_SECONDS();
};

exports.spaceAgeModule = SpaceAge;
