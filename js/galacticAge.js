function Solar(userName) {
  this.name = userName;
}


Solar.prototype.galacticAgeInSeconds= function(userAge) {
  var outputAge;
  var EARTH_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
  outputAge = userAge * EARTH_YEARS_IN_SECONDS;
   return outputAge;
};




exports.galacticAgeModule = Solar;
