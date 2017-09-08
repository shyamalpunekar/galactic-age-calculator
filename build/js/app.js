(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    return this.ageInSeconds / SpaceAge.EARTH_YEARS_IN_SECONDS_$LI$();
};

exports.SpaceAgeModule = SpaceAge;

},{}],2:[function(require,module,exports){
var SpaceAge = require('./../js/galacticAge.js').SpaceAgeModule;

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      var userAge = $('#inputAge').val();
      var calculateSpaceAge = new SpaceAge(200);
      var output = calculateSpaceAge.spaceAgeInSeconds(userAge);
      var ageSeconds = calculateSpaceAge.getSeconds();
      $('#displayUserAge').append("<li>" + output + "</li>");
      $('#displayUserAge').append("<li>" + ageSeconds + "</li>");
    });
  });

$(document).ready(function(){
  $('#userName-form').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    $('#userName-form').hide();
    $('#displayUserName').append('<p>Hi ' + userName + ' , here is your age in seconds</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/galacticAge.js":1}]},{},[2]);
