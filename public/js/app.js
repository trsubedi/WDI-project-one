
// define the Game constructor
function Game(){
  this.player = new Player('me'); //instantiates player
  this.gameboard = new Gameboard(); // creates new board
}

Game.prototype.init=function(numRow, numCol){

  // return "<a id='tile" + i +"' href='" + links[i] + "' </a>";
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
};


//A Gameboard constructor
function Gameboard(){
  //track the tiles clicked
  // this.$pieces = $(".gameboard .piece");
  this.tiles = [];
};

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.width = 6;
};

Gameboard.prototype.flipTile = function(){
  
}


//OOP GAME MODELS 
$(document).ready(function() {

  console.log("app.js is now running");
  // wait for the document to be ready


  //Start the game! 

  var game = new Game(); //follows function Game()
  game.init();
  console.log(game.player.name);

  //########################################################################
  // ################################################################### 

});
// $(".piece").toggle(clicked++ % 2 === 0);