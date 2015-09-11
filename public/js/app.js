function isMatch($lastClicked, $justClicked, $id, $prevId) {
  // TODO: ignore self matches
  var prevVal;
  var currentVal;
  var sameCardClicked = false;
  if ($lastClicked === undefined) {
    prevVal = undefined;
  } else {
    prevVal = $lastClicked;
  }
  currentVal = $justClicked;
  if ($prevId !== undefined){
    if($prevId === $id){
      sameCardClicked = true;
    }
  }

  var match = ((!sameCardClicked) && (prevVal === currentVal));

  //console.log(prevVal , "=" , currentVal);
  //console.log("Is this a match? " + match);
  if (match) {
    // stay flipped
    alert("match!");
  } else {
    // flip back
    console.log("no match!");
  }

}

$(document).ready(function(){
  var turnCount = 0;
  var $lastClicked;
  var $lastClickedId;
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
    // increment turn count
    turnCount++;
    var $justClicked = $(this).find("img")[0].src;
    var $justClickedId = $(this).find("img")[0].id;
    $(this).find(".githubImg").toggleClass("hideImg");
    // compare previous and current click items
    // only call isMatch on even turns
    isMatch($lastClicked, $justClicked, $justClickedId, $lastClickedId);
    $lastClicked = $justClicked;
    //TODO: change isMatch so it returns a Boolean (the match value)
      //if (isMatch(...)) {
      // alert("it's a match bitch!")
    $lastClickedId = $justClickedId;
    console.log("clicked id is: " + $justClickedId);
    console.log("last clicked is: " + $lastClickedId)
  });

})
