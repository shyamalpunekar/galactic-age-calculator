import { SpaceAge } from './../js/galacticAge.js';

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      let userAge = parseInt($('#inputAge').val());
      let inputBirthDate = $("#dateOfBirth").val();
      let calculateSpaceAge = new SpaceAge(inputBirthDate);
      let earthAge = calculateSpaceAge.getEarthAge();
      let mercuryAge = calculateSpaceAge.getMercuryAge();
        
       $("#displayCurrentDateAndTime").text(moment());
       $("#displayTextOne").text('Age on Earth is');
       $("#displayEarthAge").text(`${earthAge[0]} years and ${earthAge[1]} days.`);
       $("#displayMercuryAge").text(`${mercuryAge[0]} years and ${mercuryAge[1]} days.`);

    });
  });
