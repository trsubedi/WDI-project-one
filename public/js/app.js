// var $last_clicked = null;
// var clicks = 0;
// var counter = 

$(document).ready(function(){
  var turnCount = 0;
  var lastClicked;
  
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
    var justClicked = this;
    $(this).find(".githubImg").toggleClass("hideImg");
    // compare previous and current click items
    console.log(lastClicked, justClicked);
    lastClicked = justClicked;
  });
// ONE POSSIBLE WAY TO DO THINGS
  // var isFirstPick = true;
  // var currentCard;


  // $('img').click(function(e) {
  //   var classList = e.target.classList

  //   if (isFirstPick) {
  //     console.log('this is the first pick')
  //     currentCard = classList[classList.length - 1]
  //     console.log(currentCard)
  //     isFirstPick = false;
  //     console.log('this is the second pick')
  //   } else if (currentCard === classList[classList.length - 1]) {
  //     isFirstPick = true;
  //     console.log('MATCH');
  //   } else {
  //     isFirstPick = true;
  //     console.log('NOT A MATCH');
  //   }
  // })
  // END OF FIRST POSSIBLE WAY

  // ANOTHER THING THAT MIGHT WORK

//   $(function() {
//   var cards = document.querySelectorAll(".piece");
//   for ( var i  = 0, len = cards.length; i < len; i++ ) {
//     var card = cards[i];
//     clickListener( card );
//   }

//   $('A').value


//   function clickListener(card) {
//     card.addEventListener( "click", function() {
//       var c = this.classList;
//       c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
//       console.log(c);
//     });
//   }
// })
  // END OTHER THING

  // })

})
