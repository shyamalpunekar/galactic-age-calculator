var SpaceAge = require('./../js/galacticAge.js').spaceAgeModule;

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      var userAge = parseInt($('#inputAge').val());
      var calculateSpaceAge = new SpaceAge(200);
      var output = calculateSpaceAge.spaceAgeInSeconds(userAge);
      var ageSeconds = calculateSpaceAge.getSeconds();
      $('#displayUserAge').append("<li>" + output + "</li>");
      $('#displayUserAge').append("<li>" + ageSeconds + "</li>");
    });
  });
