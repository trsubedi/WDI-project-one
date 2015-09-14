
function isMatch($lastClicked, $justClicked, $id, $prevId) {
 
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


  if (match) {
    // stay flipped
    alert("match!");
  } else {
    // hide clicked elements 
    $(this).f.toggleClass("hideImg");    
  }

}

$(document).ready(function(){
  alert('login to play');
  // $('.adv-cat hidden').on('click',function({
  //   alert('login to play game');
  // }));

  var $lastClicked = null;
  // var $lastClickedId;
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
    alert('login to play game')

    // flip the piece
    $(this).find('div').toggleClass('show hidden')
   
    // if $lastClicked is null, that means this was the first turn
    // so assign $lastClicked to $(this)
    if ($lastClicked == null) {
      $lastClicked = $(this);
    }
    // if this is the second turn, we'll go into this code block...
    else {
      // grab the class that represents the piece's image 
      // (first class in the list of classes)
      var _this = $(this).find('div').first().attr('class').split(' ')[0]
      var last = $lastClicked.find('div').first().attr('class').split(' ')[0];
      var samePiece = ($(this).attr('id') === $lastClicked.attr('id'))

      if (_this === last && !samePiece) {
        console.log('match!');
      }
      else {
        console.log('no match!')
        $(this).find('div').toggleClass('show hidden');
        $($lastClicked).find('div').toggleClass('show hidden');
      }
      $lastClicked = null;
    }

  });

});

// $.get("/", function(res){
//   alert('res');
// });
