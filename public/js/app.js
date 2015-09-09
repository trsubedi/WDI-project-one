//front-end javascript here
$(document).ready(function(){

  console.log("app.js is now running");
// wait for the document to be ready
  // function renderGame() {

  //     var clicked = 0;
  //     var matched = [];
  $(".piece").on("click", function(){
    $(this).children().toggleClass("show hidden");
    
    
  });



});
// $(".piece").toggle(clicked++ % 2 === 0);