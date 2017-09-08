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
