import { SpaceAge } from './../js/galacticAge.js';

  $(document).ready(function() {
    $('#galctic-age-form').submit(function(event) {
      event.preventDefault();
      var userAge = parseInt($('#inputAge').val());
      let inputBirthDate = $("#dateOfBirth").val();
      var calculateSpaceAge = new SpaceAge(inputBirthDate);
      var earthAge = calculateSpaceAge.getEarthAge();

       $("#displayEarthAge").text(`${earthAge[0]} years and ${earthAge[1]} days.`);

    });
  });
