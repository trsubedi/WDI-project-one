function isMatch($lastClicked, $justClicked) {
  var prevVal;
  var currentVal;
  if ($lastClicked === undefined) {
    prevVal = undefined;
  } else {
    prevVal = $lastClicked.attr("value");
  }
  currentVal = $justClicked.attr("value");
  if (prevVal === currentVal) {
    console.log("match!")
  } else {
    console.log("no match!")
  }

}

$(document).ready(function(){
  var turnCount = 0;
  var $lastClicked;
  
  $("#reset").on("click", function shuffle(event){
      var parent = $("#shuffle");
      var divs = parent.children();
      while (divs.length) {
          parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
  });

  $(".piece").on("click", function(){
    // increment turn count
    turnCount++;
    var $justClicked = $(this).find(".githubImg");
    $(this).find(".githubImg").toggleClass("hideImg");
    // compare previous and current click items
    isMatch($lastClicked, $justClicked);
    $lastClicked = $justClicked;
  });




})
