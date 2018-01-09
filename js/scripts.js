$(function() {

  $(".flashcard-title").click(function(){
    $(this).fadeToggle(function(){
      $(this).parent().children(".flashcard-body").fadeToggle();
    });
  });
  $(".flashcard-body").click(function(){
    $(this).fadeToggle(function() {
      $(this).parent().children(".flashcard-title").fadeToggle();
    });
  });
});
