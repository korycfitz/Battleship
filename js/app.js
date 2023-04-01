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
let board, winner, turn, height, width, placedPositions, placedShips, hidden, messageEl, squareEls, message2, ship
/*---- Cached Element References ----*/
messageEl = document.getElementById("message1");
messageEl2 = document.getElementById("message2");
const ship1btn = document.getElementById("ship1")
const ship2btn = document.getElementById("ship2")
const ship3btn = document.getElementById("ship3")
const ship4btn = document.getElementById("ship4")
const ship5btn = document.getElementById("ship5")
squareEls = document.querySelectorAll(".sqr1");
/*--------- Event Listeners ---------*/
ship1btn.addEventListener('click', handleClick)
// ship2btn.addEventListener('click', placeShip2)
// ship3btn.addEventListener('click', placeShip3)
// ship4btn.addEventListener('click', placeShip4)
// ship5btn.addEventListener('click', placeShip5)

/*------------ Functions ------------*/
function init(){
  boardValidPositions = []
  for (let idx1 = 0; idx1 < 10; idx1++) {
    for (let idx2 = 0; idx2 < 10; idx2++) {
      positions.push([idx1, idx2])
    }
  }

  //fills the board with null values that we will use to place ships
  // board = new Array(10).fill(new Array(10).fill(null));
  //not working because each of the inner arrays point to the same place in memory 
  board = [
    [null, null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null]
]
  width = board[0].length
  height = board.length
  turn = 1
  hidden = false;
  winner = false;
  //will use to track how many ships have been placed
  placedPositions = []
  placedShips = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: []
  }
  render()
}

function render(){
  updateMessage()
  updateSquaresEls()
  updateBoard()
}
function updateMessage(){
  if (hidden === false && turn === 1) {
    messageEl.textContent = "Player1 Place Ships"
    messageEl2.textContent = 'To Place a ship, click on a button, then click on the squares on the board where you would like to place the ship'
  } else if (hidden === false && turn === -1) {
    messageEl.textContent = "Player2 Place Ships"
    messageEl2.textContent = 'To Place a ship, click on a button, then click on the squares on the board where you would like to place the ship'
  }


}

function updateSquaresEls(){
  // if (hidden === false && turn === 1)  {
  //   squareEls = document.querySelectorAll(".sqr1");
  // } else if (hidden === false && turn === -1) {
  //   squareEls = document.querySelectorAll(".sqr2");
  // }

}

function updateBoard(){
  //switch to while loop
  if (placedShips !== ships && turn === 1) {

    // placeShips()
    //fill corresponding square on board with corresponding color
    //push placed value string to placed ships 
  } else if(placedShips === ships && turn === 1) {
    turn = -1
    //hideShips()
  } else if(placedShips !== ships && turn === -1) {
  // placeShips()
  } else {
    //all ships placed
  //when ships are all placed hides buttons and messages, and changes to "game" state
  //hideShips()
  }
}

// function placeShips(evt){
//   console.log(evt)
//   placeShip1(evt)
//   placeShip2(evt)
//   placeShip3(evt)
//   placeShip4(evt)
//   placeShip5(evt)
// }
//Next Steps!!!!!!!!!!
function handleClick(){
  squareEls.forEach(square => {
    square.addEventListener("click", placeShip1)
  })


  // console.log(boardValidPositions)
  //add all the logic here to hide buttons, based on turn, switch turns, etc
  // const sqIdx = evt.target.id;
  // console.log(sqIdx)


  //hide all the buttons except 1
  //on each button click, add event listener for the corresponding button     
  //fill corresponding square on board with corresponding color
    //push placed value string to placed ships 
  //push choice to ship in corresponding placedShips object array
  //define isValidPosition method
  //add 1 to counter variable if isValidPosition
  //remove position from isValidPosition
  //push placed value string to placed ships 
  //replace null board values with position

}
function placeShip1(evt){
  let idx = evt.target.id.split("")
  idx = idx.map(idx => Number(idx))
  let row = idx[0]
  let col = idx[1]
  if (board[row][col] === null && isValid && isAdjacent(row,col)) {
    board[row][col] = 'S1'
    placedShips.ship1.push('S1')
    placedPositions.push([row, col])
    // console.log(placedShips)
    // console.log(placedPositions)

  }
  console.log(board)
}

function isValid(){
//is valid if is length of ship is less than amount of S1 on board && placement is next to another S1
counter = 0
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] = 'S1') counter += 1
      if (counter < 5) return true
    }
  }
  return false
}

function isAdjacent(rowClicked, colClicked) {
  if (!board.flat().includes('S1')) { 
    return true
  } 
  boardValidPositions = []
  let validRows = []
  let validCols = []
  placedPositions.forEach(pos => {
    let row = pos[0]
    let col = pos[1]
    if (row + 1 < 10 && !validRows.includes(row + 1)) validRows.push(row + 1)
    if (row - 1 >= 0 && !validRows.includes(row - 1)) validRows.push(row - 1)
    if (col + 1 < 10 && !validCols.includes(col + 1)) validCols.push(col + 1)
    if (col - 1 >= 0 && !validCols.includes(col - 1)) validCols.push(col - 1)
  })
  validRows.forEach(row => {
    boardValidPositions.push([row, col])
  })

  // console.log(validRows)
  // console.log(validColumns)
  console.log(boardValidPositions)
  if (boardValidPositions.includes(rowClicked, colClicked)) return true
  return false
}

init();