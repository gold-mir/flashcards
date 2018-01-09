$(function() {
  $(".flashcard").click(function() {
    $(this).children("p").fadeToggle();
    $(this).children("h2").fadeToggle();
    // $(this.child("h2")).toggle();
  });
});
