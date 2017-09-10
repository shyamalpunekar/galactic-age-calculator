import { SpaceAge } from './../js/galacticAge.js';

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      let userAge = parseInt($('#inputAge').val());
      let inputBirthDate = $("#dateOfBirth").val();
      let calculateSpaceAge = new SpaceAge(inputBirthDate);
      let earthAge = calculateSpaceAge.getEarthAge();
      let mercuryAge = calculateSpaceAge.getMercuryAge();
      let venusAge = calculateSpaceAge.getVenusAge();
      let marsAge = calculateSpaceAge.getMarsAge();
      let jupiterAge = calculateSpaceAge.getJupiterAge();

       $("#displayCurrentDateAndTime").text(moment());
       $("#displayEarthAge").text(`Your age on Earth is ${earthAge[0]} years and ${earthAge[1]} days.`);
       $("#displayMercuryAge").text(`Your age on Mercury is ${mercuryAge[0]} years and ${mercuryAge[1]} days.`);
       $("#displayVenusAge").text(`Your age on Venus is ${venusAge[0]} years and ${venusAge[1]} days.`);
       $("#displayMarsAge").text(`Your age on Mars is ${marsAge[0]} years and ${marsAge[1]} days.`);
       $("#displayJupiterAge").text(`Your age on Jupiter is ${jupiterAge[0]} years and ${jupiterAge[1]} days.`);

    });
  });

$(document).ready(function(){
  $('#userName-form').submit(function(event){
    event.preventDefault();
    let userName = $('#name').val();
    $('#userName-form').hide();
    $('#displayUserName').append('<p>Hi ' + userName + ' , here is your age in seconds</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
  $('#displayCurrentDateAndTime').hide();

});
