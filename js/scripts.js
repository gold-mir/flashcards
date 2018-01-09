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

  $(".new-card-button").click(function() {
    var newTitle = prompt("What is the title of your new card?");
    var newDefinition = prompt("What is the definition for your new card?");

    $("#card-container").append("<div class=\"col-md-4 flashcard\"></div>");
    $("#card-container > .flashcard:last-child").append(
          "<div class=\"card flashcard-title text-center\"\></div>");
    $("#card-container > .flashcard:last-child > .flashcard-title").append(
      "<div class=\"card-body\"></div>");
    $("#card-container > .flashcard:last-child > .flashcard-title > .card-body").append(
      "<h1 class=\"card-title\"></h1>");
    $("#card-container > .flashcard:last-child").append(
      "<div class=\"card flashcard-body\"></div>");
    $("#card-container > .flashcard:last-child > .flashcard-body").append(
      "<div class=\"card-body\"></div>");
    $("#card-container > .flashcard:last-child > .flashcard-body > .card-body").append("<p></p>");

    $("#card-container > .flashcard:last-child > .flashcard-title > .card-body > h1").append(newTitle);
    $("#card-container > .flashcard:last-child > .flashcard-body p").append(newDefinition);

    //Add JS

    $(".flashcard:last-child .flashcard-title").click(function(){
      $(this).fadeToggle(function(){
        $(this).parent().children(".flashcard-body").fadeToggle();
      });
    });

    $(".flashcard:last-child .flashcard-body").click(function(){
      $(this).fadeToggle(function() {
        $(this).parent().children(".flashcard-title").fadeToggle();
      });
    });
  });
});

// <div class="col-md-4 flashcard">
//   <div class="card flashcard-title text-center">
//     <div class="card-body">
//       <h1 class="card-title">Create New Card</h1>
//     </div>
//   </div>
//   <div class="card flashcard-body">
//     <div class="card-body">
//       <p></p>
//     </div>
//   </div>
// </div>
