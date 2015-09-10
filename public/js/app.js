function isMatch($lastClicked, $justClicked) {
  // TODO: ignore self matches
  var prevVal;
  var currentVal;
  if ($lastClicked === undefined) {
    prevVal = undefined;
  } else {
    prevVal = $lastClicked;
  }
  currentVal = $justClicked;

  var match = prevVal === currentVal;

  //console.log(prevVal , "=" , currentVal);
  //console.log("Is this a match? " + match);
  //console.log(isSame);

  if (match) {
    // stay flipped
    console.log("match!")
  } else {
    // flip back
    console.log("no match!")
  }

}

$(document).ready(function(){
  var turnCount = 0;
  var $lastClicked;
  // shuffle function
  $("#reset").on("click", function shuffle(event){
      var parent = $("#shuffle");
      var divs = parent.children();
      while (divs.length) {
          parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
  });
  //toggles between hide and show image
  $(".piece").on("click", function(){

    //console.log();
    // increment turn count
    turnCount++;
    var $justClicked = $(this).find("img")[0].src;
    $(this).find(".githubImg").toggleClass("hideImg");
    // compare previous and current click items
    // only call isMatch on even turns
    isMatch($lastClicked, $justClicked);
    $lastClicked = $justClicked;
  });

})


// 
