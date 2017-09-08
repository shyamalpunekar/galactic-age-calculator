$(document).ready(function(){
  $('#userName-form').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    $('#userName-form').hide();
    $('#displayUserName').append('<p>Hi ' + userName + ' , here is your age in seconds</p>');
  });
});
