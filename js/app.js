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
let width, height, board, turn, currentShipNum, currentShip, placedShips, positions, placedShipsCount, ships, shipArr, allShipsPlaced, ship1, ship2, ship3, ship4, ship5, shipsHidden, validPos//game status will display false before in 'game' mode and true after
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references
const messageEl = document.getElementById("message1");
const squareEls = document.querySelectorAll(".sqr1");
const playGame = document.getElementById("play-game");
const hideBtn = document.getElementById("hide-board")
// const resetBtnEl = document.querySelector('#reset-button');
/*----------------------------- Event Listeners -----------------------------*/
playGame.addEventListener('click', handleBtnClick)
hideBtn.addEventListener('click', hideShips)
// resetBtnEl.onclick = function(){
//   init();
// }
/*-------------------------------- Functions --------------------------------*/
function handleBtnClick(){
  init();
//will need to remove it after all of the ships are placed for both players
//then we will add a new event listener
  squareEls.forEach(ele => {
    ele.addEventListener("click", handleSqClick);
  })
}


function init(){
  //build out board using document.createElement later on
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
  positions = []
  for (let row = 0; row < height; row++ ){
    for (let col = 0; col < width; col++) {
      positions.push([row, col])
    }
  }
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
  shipArr = [];
  placedShipsCount = 0;
  turn = 1;
  allShipsPlaced = false;
  shipsHidden = false;
  winner = false;
  render();
}

// 4) The state of the game should be rendered to the user
function render(){
  updateBoard();
  //updateBoard will only work for the game before it is in the "play" state because we will need to update the board differently, to display hits and misses. I need to figure out how to handle a different board state.
  updateMessage();
  //add event listeners to squares
}

function updateBoard(){
  //if all ships aren't placed, update board to display ships that are being placed 
  if (!allShipsPlaced) {
    let i = 0
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
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
    //all ships are place
    //check if hidden
    
    //check if ai placed ships yet
    //if these are both true, update board differently according to game play
  }
}
function updateMessage(){
  //render message based on current game state
  if (winner === false && allShipsPlaced === false && currentShipNum === 1) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 5)! Do so by clicking a square, then click adjacent squares. After you place all of your ships, click the button below to hide your ships`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 2) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 4)! Do so by clicking a square, then click adjacent squares. After you place all of your ships, click the button below to hide your ships`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 3) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 3)! Do so by clicking a square, then click adjacent squares. After you place all of your ships, click the button below to hide your ships`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 4) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 3)! Do so by clicking a square, then click adjacent squares. After you place all of your ships, click the button below to xhide your ships`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 5) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 2)! Do so by clicking a square, then click adjacent squares. After you place all of your ships, click the button below to hide your ships`
  } else if (winner === false && !shipsHidden) {
    messageEl.textContent = 'All ships have been placed! Press the button below to start!'
    return;
  } else if (winner === false && turn === 1) {
    //need to check based on sq clicked if is a hit or miss
    messageEl.textContent = `It's player\'s turn. Click a square to guess`
  } else if (winner === false && turn === -1) {

  }
}


function handleSqClick(evt){
  let sqIdx = evt.target.id;
  let i = 0;
  let rowClicked, colClicked
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (sqIdx === squareEls[i].id) {
        if (winner === true) return
        //no winner yet
        //want to return out if allships are not placed yet (in board 'setting' state) and click on a square corresponding to a placed ship
        if (!allShipsPlaced && (board[row][col] === 1 || board[row][col] === 2 || board[row][col] === 3 || board[row][col] === 4 || board[row][col] === 5)) return;
        //otherwise either clicked square in game 'play' state, or clicked empty square in 'setting' state //need to account for this
        //if in the 'game' state, we need to return out if winner === true or if spot is already guessed
        if (board[row][col] === 'X' || winner === true) return;
        //going to need to add a different variable for every square
        rowClicked = row;
        colClicked = col;
      }
      i++
    }
  }
  //after this loop, we want to check for any occurance in which we are still placing ships (every possible board state), we want to make sure all the pieces are placed in the loop
  //after loop, 
  if (!allShipsPlaced) {
    placeShip(rowClicked, colClicked)
  }
  if (shipsHidden) {
    
  }

  render();
}

function placeShip(row, col) {
  if (placedShipsCount < 17) {
    isValid(row, col)
    if (true) {
      board[row][col] = currentShipNum
      placedShipsCount++
      placedShips[`ship${currentShipNum}`].push([currentShip[0], [row, col]])
      if (placedShips[`ship${currentShipNum}`].length >= ships[`ship${currentShipNum}`].length) {
        currentShipNum++
        //track current ship placement, reset after entire ship is place
        shipArr = [];
        //track all the valid positions
      }
    }
  } else {
    allShipsPlaced = true
    return;
  }
}

function isValid(row, col) {
  validPos = positions
  console.log(positions[0])
  if (positions.includes([3,3])) console.log('hello')
  if (placedShips[`ship${currentShipNum}`].length === 0) {
    shipArr.push([row, col])

    console.log(shipArr)
    return true;
  }
  if (placedShips[`ship${currentShipNum}`].length < ships[`ship${currentShipNum}`].length) { 
    shipArr.push([row, col])
    console.log(shipArr)
  }
}








function hideShips(){
  //if all ships are placed, and ships are not hidden, hide the ships
    //change display of each box to be empty
    let i = 0
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        squareEls[i].textContent = "";
        i++
      }
    }
    //change shipsHidden to true so we don't use this function anymore
    shipsHidden = true;
    aiPlaceShips()
}

function aiPlaceShips(){
  //makes new board with hidden ai ships
}

function play(){

}

function changeTurn(){

}
