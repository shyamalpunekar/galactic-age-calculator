import { SpaceAge } from './../js/galacticAge.js';

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      var userAge = parseInt($('#inputAge').val());
      let inputBirthDate = $("input#dateOfBirth").val();
      var calculateSpaceAge = new SpaceAge(inputBirthDate);
      var earthAge = calculateSpaceAge.getEarthAge();

       $("#displayEarthAge").text(`${earthAge[0]} years and ${earthAge[1]} days.`);

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
