var $last_clicked = null;
var clicks = 0;
// var counter = 

$(document).ready(function(){
  
  $("#reset").on("click", function shuffle(event){
      var parent = $("#shuffle");
      var divs = parent.children();
      while (divs.length) {
          parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
  });

  $(".piece").on("click", function(){
    window.$last_clicked = $(this);
    $(this).find(".githubImg").toggleClass("hideImg");
    //checks that there've only been 2 clicks and behaves accordingly
    // if (++clicks < 2){
      
    // }
  });

})



