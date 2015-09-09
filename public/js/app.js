
// define the Game constructor
function Game(){
  this.player = new Player('me'); //instantiates player
  this.gameboard = new Gameboard(); // creates new board
}

Game.prototype.init=function(numRow, numCol){
  // when a piece is clicked, toggle it's class between show and hidden.. flip the piece over
  var game = this;
  $(".piece").on("click", function(event){
    console.log('this gives me a div with stuff in it', $(this).children() )
    $(this).find(".githubImg").toggleClass("hideImg");


  });

  // $(".piece").on("click", function(){
  //   $(this).children().toggleClass("show").toggleClass("hidden");
  //   game.gameboard.flipTile();  
  //   // game.player.move();
  // });
 
 }

//Tile constructor
function Tile(content) {
  // this.x = x;
  // this.y = y;
  this.width = 6;
  this.content = content;
};

//A starter Player constructor
function Player(name){
  this.name = name;
  this.clicked = 0;
  // this.tiles = octoPix; //chooses picture from the octopix array 
}

Player.prototype.move = function(){
  this.clicked++; //increments counter of tiles clicked
  return this.clicked; //returns the tile clicked

    // this.clickCount = 0;
    // this.firstClick = 0
    // this.secondClick = 0;
    // this.matched = [];
  // $(".piece").toggle(clicked++ % 2 === 0);

};


//A Gameboard constructor
function Gameboard(){
  //track the tiles clicked
  // this.$pieces = $(".gameboard .piece");
  // this.tiles = [];
 
/// Shuffles the board when reset button is clicked!
 $("#reset").on("click", function(event){
  $(function shuffle() {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    })
});
};

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.width = 6;
};

Gameboard.prototype.flipTile = function(){
  
}

// wait for the document to be ready
$(document).ready(function() {
  console.log("app.js is now running");
  
  //Start the game! 
  var game = new Game(); //follows function Game()
  game.init();
  console.log(game.player.name);


});
