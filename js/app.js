//Initial Data Structure
//------------------------------------------------------------------------------------------------------------------------------
//Board Class
//board: => 2d array(n x n) => n arrays of length n, nested in an outter array, with all null values
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
/*------------ Variables ------------*/

/*---- Cached Element References ----*/
// const squareEls = document.querySelectorAll(".sqr");
// console.log(squareEls)
/*--------- Event Listeners ---------*/

/*------------ Functions ------------*/
function init(){
  for (let idx1 = 0; idx1 < 10; idx1++) {
    for (let idx2 = 0; idx2 < 10; idx2++) {
      positions.push([idx1, idx2])
    }
  }
  //fills the board with null values that we will use to place ships
  const board = new Array(10).fill(new Array(10).fill([null]));
  const width = board[0].length
  const height = board.length
  let turn = 1
  let winner = false;
}

function render(){

}
// console.log(positions);
// console.log(board);