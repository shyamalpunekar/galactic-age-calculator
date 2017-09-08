(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Solar(userName) {
  this.name = userName;
}


Solar.prototype.galacticAgeInSeconds= function(userAge) {
  var outputAge;
  alert(userAge);
  var EARTH_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
  outputAge = userAge * EARTH_YEARS_IN_SECONDS;
   return outputAge;
};

exports.galacticAgeModule = Solar;

},{}],2:[function(require,module,exports){
var Solar = require('./../js/galacticAge.js').galacticAgeModule;

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      var userAge = $('#inputAge').val();
      var calculateSolar = new Solar("test");
      var output = calculateSolar.galacticAgeInSeconds(userAge);
      $('#displayUserAge').append("<li>" + output + "</li>");

    });
  });

$(document).ready(function(){
  $('#userName-form').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    $('#userName-form').hide();
    $('#displayUserName').prepend('<p>Hi ' + userName + ' , here is your age in seconds</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/galacticAge.js":1}]},{},[2]);
