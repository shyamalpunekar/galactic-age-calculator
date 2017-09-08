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
