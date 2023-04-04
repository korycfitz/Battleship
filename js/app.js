//-------------------------------------------------------------------------------------
// 1) Define the required variables used to track the state of the game
let width, height, board, turn, currentShipNum, currentShip, placedShips, positions, placedShipsCount, ships, shipArr, allShipsPlaced, ship1, ship2, ship3, ship4, ship5, shipsHidden, validPos, isHorizontal, isVertical //game status will display false before in 'game' mode and true after
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references
const messageEl = document.getElementById("message1");
const messageEl2 = document.getElementById("message2");
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
  validPos = [];
  placedShipsCount = 0;
  isVertical = false;
  isHorizotal = false;
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
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 5)! Do so by clicking a square, then click adjacent squares`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 2) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 4)! Do so by clicking a square, then click adjacent squares`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 3) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 3)! Do so by clicking a square, then click adjacent squares`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 4) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 3)! Do so by clicking a square, then click adjacent squares`
  } else if (winner === false && allShipsPlaced === false && currentShipNum === 5) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 2)! Do so by clicking a square, then click adjacent squares`
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
    placeShip(rowClicked, colClicked, isValid)
  }
  if (shipsHidden) {
    
  }

  render();
}

function placeShip(row, col, isValid) {
    if (isValid(row, col) && placedShipsCount < 17) {
      messageEl2.textContent = ""
      board[row][col] = currentShipNum
      placedShipsCount++
      placedShips[`ship${currentShipNum}`].push(currentShip[0])
      if (placedShips[`ship${currentShipNum}`].length >= ships[`ship${currentShipNum}`].length) {
        currentShipNum++
        //track current ship placement, reset after entire ship is place
        shipArr = [];
        validPos = [];
        isVertical = false;
        isHorizontal = false;
        //track all the valid positions
      } 
    } else if (placedShips >= 17) {
      allShipsPlaced = true;
      return;
  } else {
//not valid position
    messageEl2.textContent = 'Click not allowed. Ship must be placed in a horizontal or vertical, adjacent line'
  }
}

function isValid(row, col) {
  let max, min
  if (placedShips[`ship${currentShipNum}`].length === 0) {
    shipArr.push([row, col])
    if (row + 1 <= 10) validPos.push([row + 1, col])
    if (row - 1 >= 0) validPos.push([row - 1, col])
    if (col + 1 <= 10) validPos.push([row, col + 1])
    if (col - 1 >= 0) validPos.push([row, col - 1])
    return true;
  } else if (placedShips[`ship${currentShipNum}`].length < ships[`ship${currentShipNum}`].length) { 
    //loop through valid positions
    for (let i = 0; i < validPos.length; i++) {
      if (validPos[i][0] === row && validPos[i][1] === col) {
        //updateValidPositions based on new click
        //need to check if is horizontal or vertical and update 
          //need to take into account if the adjacent square = 1 || 2 || 3 || 4 || 5
        shipArr.push([row, col])
        if (shipArr.length === 2 && (shipArr[0][1] === shipArr[1][1])) isVertical = true 
        if (shipArr.length === 2 && (shipArr[0][0] === shipArr[1][0])) isHorizontal = true 
        if (isVertical) {
          let idx2 = shipArr[0][1]
          let idx1 = []
          for (let i = 0; i < shipArr.length; i++) {
            idx1.push(shipArr[i][0])
          }
          max = Math.max(...idx1)
          min = Math.min(...idx1)
          validPos = [[min - 1, idx2], [max + 1, idx2]]
        }
        if (isHorizontal) {
          console.log(shipArr)
          let idx1 = shipArr[0][0]
          let idx2 = []
          // console.log(shipArr)
          for (let i = 0; i < shipArr[0].length; i++) {
            idx2.push(shipArr[i][1])
          }
          max = Math.max(...idx2)
          min = Math.min(...idx2)
          console.log(max)
          console.log(min)
          validPos = [[max + 1, idx2], [idx2, max + 1]]
          console.log(validPos)
        }
        
        //add valid positions according to valid positions and add the ships to ship idx'        
        return true;
      } 
    }
  } else {
    return false;
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

