// /*------------ Constants ------------*/
// const positions = []
// const ships = {
//   ship1: ['S1', 'S1', 'S1', 'S1', 'S1'],
//   ship2: ['S2', 'S2', 'S2', 'S2'],
//   ship3: ['S3', 'S3', 'S3'],
//   ship4: ['S4', 'S4', 'S4'],
//   ship5: ['S5', 'S5']
// }
// /*------------ Variables ------------*/
// let board, winner, turn, height, width, placedPositions, placedShips, hidden, messageEl, squareEls, message2, ship
// /*---- Cached Element References ----*/
// messageEl = document.getElementById("message1");
// messageEl2 = document.getElementById("message2");
// const ship1btn = document.getElementById("ship1")
// const ship2btn = document.getElementById("ship2")
// const ship3btn = document.getElementById("ship3")
// const ship4btn = document.getElementById("ship4")
// const ship5btn = document.getElementById("ship5")
// squareEls = document.querySelectorAll(".sqr1");
// /*--------- Event Listeners ---------*/
// ship1btn.addEventListener('click', handleClick)
// // ship2btn.addEventListener('click', placeShip2)
// // ship3btn.addEventListener('click', placeShip3)
// // ship4btn.addEventListener('click', placeShip4)
// // ship5btn.addEventListener('click', placeShip5)

// /*------------ Functions ------------*/
// function init(){
//   board = [
//     [null, null, null, null, null, null, null, null, null, null], 
//     [null, null, null, null, null, null, null, null, null, null], 
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null]
// ]
//   width = board[0].length
//   height = board.length
//   turn = 1
//   hidden = false;
//   winner = false;
//   placedPositions = []
//   placedShips = {
//     ship1: [],
//     ship2: [],
//     ship3: [],
//     ship4: [],
//     ship5: []
//   }
//   render()
// }

// function render(){
//   updateMessage()
//   // updateSquaresEls()
//   updateBoard()
// }
// function updateMessage(){
//   if (hidden === false && turn === 1) {
//     messageEl.textContent = "Player1 Place Ships"
//     messageEl2.textContent = 'To Place a ship, click on a button, then click on the squares on the board where you would like to place the ship'
//   } else if (hidden === false && turn === -1) {
//     messageEl.textContent = "Player2 Place Ships"
//     messageEl2.textContent = 'To Place a ship, click on a button, then click on the squares on the board where you would like to place the ship'
//   }


// }

// function updateSquaresEls(){
//   // if (hidden === false && turn === 1)  {
//   //   squareEls = document.querySelectorAll(".sqr1");
//   // } else if (hidden === false && turn === -1) {
//   //   squareEls = document.querySelectorAll(".sqr2");
//   // }

// }

// function updateBoard(){
//   //switch to while loop
//   if (placedShips !== ships && turn === 1) {

//     // placeShips()
//     //fill corresponding square on board with corresponding color
//     //push placed value string to placed ships 
//   } else if(placedShips === ships && turn === 1) {
//     turn = -1
//     //hideShips()
//   } else if(placedShips !== ships && turn === -1) {
//   // placeShips()
//   } else {
//     //all ships placed
//   //when ships are all placed hides buttons and messages, and changes to "game" state
//   //hideShips()
//   }
// }

// // function placeShips(evt){
// //   console.log(evt)
// //   placeShip1(evt)
// //   placeShip2(evt)
// //   placeShip3(evt)
// //   placeShip4(evt)
// //   placeShip5(evt)
// // }
// //Next Steps!!!!!!!!!!
// function handleClick(){
//   squareEls.forEach(square => {
//     square.addEventListener("click", placeShip1)
//   })


//   // console.log(boardValidPositions)
//   //add all the logic here to hide buttons, based on turn, switch turns, etc
//   // const sqIdx = evt.target.id;
//   // console.log(sqIdx)


//   //hide all the buttons except 1
//   //on each button click, add event listener for the corresponding button     
//   //fill corresponding square on board with corresponding color
//     //push placed value string to placed ships 
//   //push choice to ship in corresponding placedShips object array
//   //define isValidPosition method
//   //add 1 to counter variable if isValidPosition
//   //remove position from isValidPosition
//   //push placed value string to placed ships 
//   //replace null board values with position

// }
// function placeShip1(evt){
//   let idx = evt.target.id.split("")
//   idx = idx.map(idx => Number(idx))
//   let row = idx[0]
//   let col = idx[1]
//   if (board[row][col] === null && isValid && isAdjacent) {
//     board[row][col] = 1
    
//     placedShips['ship1'].push('S1')
//     placedPositions.push([row, col])
//     console.log(placedPositions)
//   }
//   console.log(board)
// }

// function isValid(){
// //is valid if is length of ship is less than amount of S1 on board && placement is next to another S1
// counter = 0
//   for (let row = 0; row < height; row++) {
//     for (let col = 0; col < width; col++) {
//       if (board[row][col] = 'S1') counter += 1
//       if (counter < 5) return true
//     }
//   }
//   return false
// }

// function isAdjacent(idx) {
//   //need to check the row that is clicked against the valid positions
//   if (!board.flat().includes('S1')) { 
//     return true
//   } 
//   boardValidPositions = []
//   let validRows = []
//   let validCols = []
//   let row;
//   let col;
//   if (placedPositions.length === 1) {
//     placedPositions.forEach(pos => {
//       let row = pos[0]
//       let col = pos[1]
//       if (row + 1 < 10) boardValidPositions.push([row + 1, col])
//       if (row - 1 >= 0) boardValidPositions.push([row - 1, col])
//       if (col + 1 < 10) boardValidPositions.push([row, col + 1])
//       if (col - 1 >= 0) boardValidPositions.push([row, col - 1])
//       // if (row - 1 >= 0) validRows.push(row - 1)
//       // if (col + 1 < 10) validCols.push(col + 1)
//       // if (col - 1 >= 0) validCols.push(col - 1)
//       // if (row + 1 < 10 && !validRows.includes(row + 1)) validRows.push(row + 1)
//       // if (row - 1 >= 0 && !validRows.includes(row - 1)) validRows.push(row - 1)
//       // if (col + 1 < 10 && !validCols.includes(col + 1)) validCols.push(col + 1)
//       // if (col - 1 >= 0 && !validCols.includes(col - 1)) validCols.push(col - 1)
//     })
//   }
// //   validRows.forEach(row => {
// //     boardValidPositions.push([row, col])
// //   })
// //   validCols.forEach(col => {
// //     boardValidPositions.push([row, col])
// //   })
// // }
//   // console.log(validRows)
//   // console.log(validColumns)
//   // console.log(boardValidPositions)
//   // console.log([rowClicked,colClicked])
//   console.log(idx)
//   //can't figure out this bug.
//   for (let i = 0; i < boardValidPositions.length; i++) {
//     console.log(boardValidPositions[i])
//     if (boardValidPositions[i] === idx) return true
//   }
//   return false
// }

// init();








































//-------------------------------------------------------------------------------------
// 1) Define the required variables used to track the state of the game
let width, height, board, turn, currentShipNum, currentShip, placedShips, ships, allShipsPlaced, ship1, ship2, ship3, ship4, ship5, gameMode //game status will display false before in 'game' mode and true after
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references
const messageEl = document.getElementById("message1");
const squareEls = document.querySelectorAll(".sqr1");
const btn1 = document.getElementById("ship1")
const btn2 = document.getElementById("ship2")
const btn3 = document.getElementById("ship3")
const btn4 = document.getElementById("ship4")
const btn5 = document.getElementById("ship5")
// const resetBtnEl = document.querySelector('#reset-button');
/*----------------------------- Event Listeners -----------------------------*/
btn1.addEventListener('click', handleBtnClick)
btn2.addEventListener('click', handleBtnClick)
btn3.addEventListener('click', handleBtnClick)
btn4.addEventListener('click', handleBtnClick)
btn5.addEventListener('click', handleBtnClick)
// resetBtnEl.onclick = function(){
//   init();
// }
/*-------------------------------- Functions --------------------------------*/
function init(){
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
  width = board[0].length;
  height = board.length;
  currentShipNum = 1;
  ship1 = ['S1', 'S1', 'S1', 'S1', 'S1']
  ship2 = ['S2', 'S2', 'S2', 'S2']
  ship3 = ['S3', 'S3', 'S3']
  ship4 = ['S4', 'S4', 'S4']
  ship5 = ['S5', 'S5']
  ships = {
    ship1: ship1,
    ship2: ship2,
    ship3: ship3,
    ship4: ship4,
    ship5: ship5
  }
  currentShip = ships[`ship${currentShipNum}`]
  placedShips = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
  }
  player = 1;
  turn = 1;
  boardFull = false;
  winner = false;
  gameMode = false;
  render();
}

// 4) The state of the game should be rendered to the user
function render(){
  updateBoard();
  //updateBoard will only work for the game before it is in the "play" state because we will need to update the board differently, to display hits and misses. I need to figure out how to handle a different board state.
  updateMessage();
}

function updateBoard(){
  if (!gameMode) {
    let i = 0
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++){
        if (board[row][col] === 1) {
          squareEls[i].textContent = "S1" 
        } else if(board[row][col] === 2) {
          squareEls[i].textContent = "S2"
        } else if(board[row][col] === 3) {
          squareEls[i].textContent = "S3"
        } else if(board[row][col] === 4) {
          squareEls[i].textContent = "S4"
        } else if(board[row][col] === 5) {
          squareEls[i].textContent = "S5"
        } else {
          squareEls[i].textContent = ""
        }
        i++
      }
    }
  } else {
    //it is in game mode(not placing ships)// if ship gets guessed, update square, based on if it is a hit or missed
  }
}
function updateMessage(){
  //render message based on current game state
  // if (winner === false && boardFull === false && ship === 1 && turn === 1) {
  //   messageEl.textContent = `Player 1 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 2 && turn === 1) {
  //   messageEl.textContent = `Player 1 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 3 && turn === 1) {
  //   messageEl.textContent = `Player 1 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 4 && turn === 1) {
  //   messageEl.textContent = `Player 1 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 5 && turn === 1) {
  //   messageEl.textContent = `Player 1 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 1 && turn === -1) {
  //   messageEl.textContent = `Player 2 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 2 && turn === -1) {
  //   messageEl.textContent = `Player 2 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 3 && turn === -1) {
  //   messageEl.textContent = `Player 2 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 4 && turn === -1) {
  //   messageEl.textContent = `Player 2 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === false && ship === 5 && turn === -1) {
  //   messageEl.textContent = `Player 2 Please place ship ${ship}!`
  // } else if (winner === false && boardFull === true && turn === 1) {
  //   messageEl.textContent = `Player 1 Place the /'Hide Ships' Button to hide your ships!`
  // } else if (winner === false && boardFull === true && turn === -1) {
  //   messageEl.textContent = `Player 2 Place the /'Hide Ships' Button to hide your ships!`
  // } else if (winner === true && turn === 1) {
  //   messageEl.textContent =  `Congratulations Player 1 won!`
  // } else {
  //   messageEl.textContent =  `Congratulations Player 2 won!`
  // }
}




//this event listener will only be added once the button is clicked
//will need to remove it after all of the ships are placed for both players
//then we will add a new event listener
function handleBtnClick(evt){
  if (evt.target.id === 'ship1') {
    //if ship is already placed, return;
    //if ship is already placed, hide button
    //placeShip1()
  }
  squareEls.forEach(ele => {
    ele.addEventListener("click", handleSqClick);
  })
}

function handleSqClick(evt){
  let sqIdx = evt.target.id;
  let i = 0;
  let rowClicked, colClicked
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (sqIdx === squareEls[i].id) {
        if (board[row][col] === 1 || board[row][col] === 2 || board[row][col] === 3 || board[row][col] === 4 || board[row][col] === 5 || allShipsPlaced) {
          return;
        } 
        rowClicked = row;
        colClicked = col;
       }
       i++
    }
  }
  //if spot is occupied by a ship, or game has a winner, return out of function.

  //check if the game is in placement state, 

//   //after this loop this means there was no winner, and the current spot clicked is not occupied
//   placePiece(rowClicked, colClicked);
//   checkBoardFull();
//   switchPlayerTurn();
//   render();
}

// function placePiece(row, col) {
//     board[row][col] = ship;
//     console.log(board)
// }

// function checkBoardFull(){
//   if (ships.length === 5) board = true
// }

// function switchPlayerTurn(){
//   if (winner === true){
//     return;
//   } else {
//     turn *= -1;
//   }
// }

init();

// console.log(board)