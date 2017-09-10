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
       //$("#displayTextOne").text('Age on Earth is');
       $("#displayEarthAge").text(`Age on Earth is ${earthAge[0]} years and ${earthAge[1]} days.`);
       //$("#displayTextTwo").text('Age on Mercury is');
       $("#displayMercuryAge").text(`Age on Mercury is ${mercuryAge[0]} years and ${mercuryAge[1]} days.`);
       //$("#displayTextThree").text('Age on Venus is');
       $("#displayVenusAge").text(`Age on Venus is ${venusAge[0]} years and ${venusAge[1]} days.`);
       //$("#displayTextFour").text('Age on Mars is');
       $("#displayMarsAge").text(`Age on Mars is ${marsAge[0]} years and ${marsAge[1]} days.`);
       //$("#displayTextFive").text('Age on Jupiter is');
       $("#displayJupiterAge").text(`Age on Jupiter is ${jupiterAge[0]} years and ${jupiterAge[1]} days.`);

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
