//Initial Data Structure
//------------------------------------------------------------------------------------------------------------------------------
//Board Class

//valid positions: 2d array of board positions: [[row,col], [row,col],...etc]
//ship location: object => {  keys = shipName,    values = [[row,col], [row,col],...etc] dependent on ship size  }
//shots => object => {  keys = shotNumber,    values = [[row,col]]  }
//hit shots => object => {  keys = shotNumber,  values =  values = [[row,col]]   }
//missed shots => object => {  keys = shotNumber,  values =  values = [[row,col]]   }
//shape of ships => 5, 1d arrays of length 2,3,3,4,5 (for each player)
//num of ships => 5
//sunk ships: object => [array of ship names]
//player = 1 || -1 (use this until we finish a basic setup and implement classes to initialize a player object)

//PlayerClass
//gets the players move

//Battleship Class
//initializes player and board objects 
//starts game 
//places ships
//hides ships 
//repeats for player -1
//win/loss logic 
//turn logic (if player 1s turn, pick board location)
//logic to handle pick (hit ship, missed ship, is not valid position (already picked))
//renders board

//Play Class
//plays game
//-----------------------------------------------------------------------------------------------------------------------------
//Psudocode
//going to build out the game simply, without classes first, then add them in later but will pseudo code them in
//1. define variables to track turn, boards(will make board class after simple version is built out), players (will eventually make a player class), ships, positions, valid positions for placing ships, placed ships, board status(if the players are placing ships or playing game), missed guesses, hit guesses, hit ships, sunk ships, winner, 
//2. build the basic html board display
// place ships portion
//3. initialize Board class and add logic to handle placing ships
//3.1 add logic to handle valid positions
//3.2 add catched element references to every square on the board
//3.3 add event listeners that react to clicking on board squares
//3.4 add logic to keep track of if the player placed all their ships
//3.5 add render function to render the board every time it is clicked
//4. add html button to hide ships once they are placed, and switch player turn
//4.5 add logic to initialize a new board instance for second player
//add button after player 2 finishes placing ships to hide their board and //play(game)
//add all of the logic for playing the game(isValidPositions, switchTurn, rendering boards, etc) 
//5. add logic to handle once there is a winner, and how a winner is determined
//6. probably going to need a toggleClass hideShips class on each HTMl element that corresponds to each ship 
//6.1 or we could use 4 grids, in total, 2 for each player (1 for guessess and 1 for ships) or could have 2 boards toggle the class to hide the board of the grid that was used to create the ships
//probably going to tackle this when I get to it, but most likely going to stick to two boards and toggle a class to hide the ships 
//7.add css and html styling 
//8.create a reset button and add more complex css styling 

//PlayerClass
    //constructor 
    
//Board Class
  //constructor 
    //board: => 2d array(n x n) => 10 arrays of length 10, nested in an outter array
    //ship location: object => (   keys = shipName,    value = [[row,col], [row,col]  )
/*------------ Constants ------------*/
const positions = []
const ships = {
  ship1: ['S1', 'S1', 'S1', 'S1', 'S1'],
  ship2: ['S2', 'S2', 'S2', 'S2'],
  ship3: ['S3', 'S3', 'S3'],
  ship4: ['S4', 'S4', 'S4'],
  ship5: ['S5', 'S5']
}
/*------------ Variables ------------*/
let board, winner, turn, height, width, updateBoardValidPositions, placedShips, hidden, messageEl, squareEls
/*---- Cached Element References ----*/
/*--------- Event Listeners ---------*/

/*------------ Functions ------------*/
function init(){
  updateBoardValidPositions = []
  for (let idx1 = 0; idx1 < 10; idx1++) {
    for (let idx2 = 0; idx2 < 10; idx2++) {
      positions.push([idx1, idx2])
      updateBoardValidPositions.push([idx1, idx2])
    }
  }

  //fills the board with null values that we will use to place ships
  board = new Array(10).fill(new Array(10).fill([null]));
  width = board[0].length
  height = board.length
  turn = 1
  hidden = false;
  winner = false;
  //will use to track how many ships have been placed
  placedShips = {}
  render()
}

function render(){
  updateMessage()
  updateSquaresEls()
  updateBoard()
}
function updateMessage(){
  if (hidden === false) {
    messageEl = document.getElementById("message1");
  } else {
    messageEl = document.getElementById("message2");
  }
}
function updateSquaresEls(){
  if (hidden === false) {
    squareEls = document.querySelectorAll(".sqr1");
  } else {
    squareEls = document.querySelectorAll(".sqr2");
  }
}

function updateBoard(){
  while (placedShips.length < 5) {
    //have the user place ships
    squareEls.forEach(square => {
      square.addEventListener("click", placeShips);
    })
  }
}


init();
//need to add a second board and give the class of .sqr 2to the div elements 