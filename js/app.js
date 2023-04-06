/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game
let width, height, board, currentShipNum, currentShip, placedShips, placedShipsCount, ships, shipArr, allShipsPlaced, ship1, ship2, ship3, ship4, ship5, shipsHidden, validPos, isHorizontal, isVertical, computerBoard, positions, turn, playerHitCount, compHitCount
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("message1");
const messageEl2 = document.getElementById("message2");
const squareEls = document.querySelectorAll(".sqr1");
const squareEls2 = document.querySelectorAll(".sqr2");
const playGame = document.getElementById("play-game");
const hideBtn = document.getElementById("hide-board");
const playerBoardEle = document.getElementById('player1')
const computerBoardEle = document.getElementById('computer');
const resetBtnEl = document.querySelector('#reset');
/*----------------------------- Event Listeners -----------------------------*/
playGame.addEventListener('click', handleBtnClick)
/*-------------------------------- Functions --------------------------------*/
function handleBtnClick(){
  playGame.removeEventListener('click', handleBtnClick)
  init();
  squareEls.forEach(ele => {
    ele.addEventListener("click", handleSqClick);
  })
}
function init(){
  resetBtnEl.addEventListener('click', init)
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
  computerBoard = [
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
  positions = [];
  width = board[0].length;
  height = board.length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      positions.push(row,col)
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
  validPos = [];
  placedShipsCount = 0;
  isVertical = false;
  isHorizotal = false;
  allShipsPlaced = false;
  shipsHidden = false;
  winner = false;
  playerHitCount = 0;
  compHitCount = 0;
  render();
}

function render(){
  updateBoard();
  updateMessage();
}

function updateBoard(){
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
        } else if(board[row][col] === null) {
          squareEls[i].textContent = ""
        }
        i++
      }
    }
  } else if (allShipsPlaced && !shipsHidden) {
    return;
  } else if(shipsHidden && !winner) {
    // update board differently according to game play
    let i = 0
    //need to incorporate turn into each one of these so they don't update the wrong board
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (board[row][col] === -1) {
          squareEls[i].textContent = "X"
        } else if(board[row][col] === -2) {
          squareEls[i].textContent = "X"
        } else if(board[row][col] === -3) {
          squareEls[i].textContent = "X"
        } else if(board[row][col] === -4) {
          squareEls[i].textContent = "X"
        } else if(board[row][col] === -5) {
          squareEls[i].textContent = "X"
        }
        if (computerBoard[row][col] === -1) {
          squareEls2[i].textContent = "X"
        } 
        if(computerBoard[row][col] === -2) {
          squareEls2[i].textContent = "X"
        } 
        if (computerBoard[row][col] === -3) {
          squareEls2[i].textContent = "X"
        } 
        if (computerBoard[row][col] === -4) {
          squareEls2[i].textContent = "X"
        } 
        if(computerBoard[row][col] === -5) {
          squareEls2[i].textContent = "X"
        } 
        if(computerBoard[row][col] === 6) {
          squareEls2[i].textContent = "-"
        } 
        if(board[row][col] === 6) {
          squareEls[i].textContent = "-"
        }
        i++
      }
    }
  }
}

function updateMessage(){
  //render message based on current game state
  if (!winner && !allShipsPlaced && currentShipNum === 1) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 5)! Do so by clicking a square, then click adjacent squares`
  } else if (!winner && !allShipsPlaced && currentShipNum === 2) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 4)! Do so by clicking a square, then click adjacent squares`
  } else if (!winner && !allShipsPlaced && currentShipNum === 3) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 3)! Do so by clicking a square, then click adjacent squares`
  } else if (!winner && !allShipsPlaced && currentShipNum === 4) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 3)! Do so by clicking a square, then click adjacent squares`
  } else if (!winner && !allShipsPlaced && currentShipNum === 5) {
    messageEl.textContent = `Please place ship ${currentShipNum} (Length: 2)! Do so by clicking a square, then click adjacent squares`
  } else if (!winner && !shipsHidden) {
    messageEl.textContent = 'All ships have been placed! Press the button below to start!'
  } else if (!winner && shipsHidden ){
    messageEl.textContent = `It's your turn. Click a square on the opposite board to guess! Hits will be displayed by an X. Misses will be displayed by a -`
  } else if (!winner && turn === -1) {
    messageEl.textContent = 'Computer is thinking...'
  }
}

function handleSqClick(evt){
  let sqIdx = evt.target.id;
  let i = 0;
  let rowClicked, colClicked
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (sqIdx === squareEls[i].id && !shipsHidden) {
        if (!allShipsPlaced && (board[row][col] === 1 || board[row][col] === 2 || board[row][col] === 3 || board[row][col] === 4 || board[row][col] === 5)) return;
        //otherwise either clicked square in game 'play' state, or clicked empty square in 'setting' state //need to account for this
        //if in the 'game' state, we need to return out if winner === true or if spot is already guessed
        rowClicked = row;
        colClicked = col;
      } 
      if ((sqIdx === squareEls2[i].id) && shipsHidden){
        //not hitting this function
        if (winner === true) return;
        if (computerBoard[row][col] === -1 || computerBoard[row][col] === -2 || computerBoard[row][col] === -3 || computerBoard[row][col] === -4 || computerBoard[row][col] === -5) return;
        rowClicked = row;
        colClicked = col;
      }
      i++
    }
  }
  if (!allShipsPlaced) {
    placeShip(rowClicked, colClicked, isValid);
  } else if (allShipsPlaced && !shipsHidden) {
    return;
  } else {
    hideBtn.removeEventListener('click', hideShips)
    if ((computerBoard[rowClicked][colClicked] === -1 || computerBoard[rowClicked][colClicked] === -2 || computerBoard[rowClicked][colClicked] === -3 || computerBoard[rowClicked][colClicked] === -4 || computerBoard[rowClicked][colClicked] === -5 || computerBoard[rowClicked][colClicked] === 6)) return
    playerGuess(rowClicked, colClicked);
    computerGuess();
  }
  render();
}

function placeShip(row, col, isValid) {
  if (placedShipsCount >= 17) {
    allShipsPlaced = true;
    return
  }
  if (isValid(row, col)) {
    messageEl2.textContent = "";
    board[row][col] = currentShipNum;
    placedShipsCount++
    if (placedShipsCount === 17) {
      hideBtn.addEventListener('click', hideShips)
    }
    placedShips[`ship${currentShipNum}`].push(currentShip[0])
    if (placedShips[`ship${currentShipNum}`].length >= ships[`ship${currentShipNum}`].length) {
      currentShipNum++
      shipArr = [];
      validPos = [];
      isVertical = false;
      isHorizontal = false;
    } 
  } else {
  messageEl2.textContent = 'Click not allowed. Ship must be placed in a horizontal or vertical, adjacent line'
  return;
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
    for (let i = 0; i < validPos.length; i++) {
      if (validPos[i][0] === row && validPos[i][1] === col) {
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
          let idx1 = shipArr[0][0]
          let idx2 = []
          for (let i = 0; i < shipArr.length; i++) {
            idx2.push(shipArr[i][1])
          }
          max = Math.max(...idx2)
          min = Math.min(...idx2)
          validPos = [[idx1, min - 1], [idx1, max + 1]]
        }   
        return true;
      } 
    }
  } else {
    return false;
  }
}

function hideShips(){
  let i = 0
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      squareEls[i].textContent = "";
      i++
    }
  }
  shipsHidden = true;
  computerPlaceShips()
}
function computerPlaceShips(){
  squareEls.forEach(ele => {
    ele.removeEventListener("click", handleSqClick);
  })
  squareEls2.forEach(ele => {
    ele.addEventListener("click", handleSqClick);
  })
  resetBtnEl.removeEventListener('click', init)
  resetBtnEl.addEventListener('click', resetGame)
  let occ = [0,1,2,3,4,5,6,7,8,9]
  let s1idx1 = Math.floor(Math.random() * 10)
  let s1idx2 = occ.splice(Math.floor(Math.random() * 10), 1)
  computerBoard[s1idx1][s1idx2] = 1
  if (s1idx1 + 1 <= 9 && s1idx1 + 2 <= 9 && s1idx1 + 3 <= 9 && s1idx1 + 4 <= 9) {
    computerBoard[s1idx1 + 1][s1idx2] = 1
    computerBoard[s1idx1 + 2][s1idx2] = 1
    computerBoard[s1idx1 + 3][s1idx2] = 1
    computerBoard[s1idx1 + 4][s1idx2] = 1
  } else {
    computerBoard[s1idx1 - 1][s1idx2] = 1
    computerBoard[s1idx1 - 2][s1idx2] = 1
    computerBoard[s1idx1 - 3][s1idx2] = 1
    computerBoard[s1idx1 - 4][s1idx2] = 1
  }
  s1idx1 = Math.floor(Math.random() * 10)
  s1idx2 = occ.splice(Math.floor(Math.random() * 9), 1)
  computerBoard[s1idx1][s1idx2] = 2
  if (s1idx1 - 1 >= 0 && s1idx1 - 2 >= 0 && s1idx1 - 3 >= 0) {
    computerBoard[s1idx1 - 1][s1idx2] = 2
    computerBoard[s1idx1 - 2][s1idx2] = 2
    computerBoard[s1idx1 - 3][s1idx2] = 2
  } else {
    computerBoard[s1idx1 + 1][s1idx2] = 2
    computerBoard[s1idx1 + 2][s1idx2] = 2
    computerBoard[s1idx1 + 3][s1idx2] = 2
  }
  s1idx1 = Math.floor(Math.random() * 10)
  s1idx2 = occ.splice(Math.floor(Math.random() * 8), 1)
  computerBoard[s1idx1][s1idx2] = 3
  if (s1idx1 + 1 <= 9 && s1idx1 + 2 <= 9) {
    computerBoard[s1idx1 + 1][s1idx2] = 3
    computerBoard[s1idx1 + 2][s1idx2] = 3
  } else {
    computerBoard[s1idx1 - 1][s1idx2] = 3
    computerBoard[s1idx1 - 2][s1idx2] = 3
  }
  s1idx1 = Math.floor(Math.random() * 10)
  s1idx2 = occ.splice(Math.floor(Math.random() * 7), 1)
  computerBoard[s1idx1][s1idx2] = 4
  if (s1idx1 - 1 >= 0 && s1idx1 - 2 >= 0) {
    computerBoard[s1idx1 - 1][s1idx2] = 4
    computerBoard[s1idx1 - 2][s1idx2] = 4
  } else {
    computerBoard[s1idx1 + 1][s1idx2] = 4
    computerBoard[s1idx1 + 2][s1idx2] = 4
  }
  s1idx1 = Math.floor(Math.random() * 10)
  s1idx2 = occ.splice(Math.floor(Math.random() * 6), 1)
  computerBoard[s1idx1][s1idx2] = 5
  if (s1idx1 - 1 >= 0) {
    computerBoard[s1idx1 - 1][s1idx2] = 5
  } else {
    computerBoard[s1idx1 + 1][s1idx2] = 5
  } 
  updateMessage()
}

function playerGuess(row, col){
  messageEl2.textContent = ""
  turn = 1
  if (computerBoard[row][col] === 1 || computerBoard[row][col] === 2 || computerBoard[row][col] === 3 || computerBoard[row][col] === 4 || computerBoard[row][col] === 5) {
    computerBoard[row][col] = computerBoard[row][col] * -1
    playerHitCount++
    messageEl2.textContent = "You Hit a Ship!"
    computerBoardEle.setAttribute('class', 'board animate__animated animate__bounce')
    setTimeout(() => {
      computerBoardEle.setAttribute('class', 'board')
    }, 1000);
  } else if (computerBoard[row][col] === null) {
    computerBoard[row][col] = 6
  }
  if (playerHitCount === 17) {
    updateBoard()
    winner = true;
    messageEl.textContent = 'Congrats, You Win!';
    return;
  }
  updateBoard()
}

function computerGuess(){
  turn = -1
  //this will make sure never guess same choice
  let randEvenIdx = (Math.floor(Math.random() * (positions.length / 2))) * 2
  let row = positions[randEvenIdx]
  let col = positions[randEvenIdx + 1]
  positions.splice(randEvenIdx, 2)
  if (board[row][col] === 1 || board[row][col] === 2 || board[row][col] === 3 || board[row][col] === 4 || board[row][col] === 5) {
    board[row][col] = board[row][col] * -1
    compHitCount++
    playerBoardEle.setAttribute('class', 'board animate__animated animate__bounce')
    setTimeout(() => {
      playerBoardEle.setAttribute('class', 'board')
    }, 1000);
    if (messageEl2.textContent === "You Hit a Ship!") messageEl2.textContent = 'You and the Computer both hit ships!'
    if (messageEl2.textContent === "") messageEl2.textContent = "Computer Hit a Ship!"
  } else {
    board[row][col] = 6
  }
  if (turn === -1 && compHitCount === 17) {
    updateBoard()
    winner = true
    turn = -1
    messageEl.textContent = 'The Computer Won! Better luck next time!'
    return;
  }
  updateBoard()
}

function resetGame(){
  squareEls.forEach(ele => {
    ele.addEventListener("click", handleSqClick);
  })
  squareEls2.forEach(ele => {
    ele.removeEventListener("click", handleSqClick);
    ele.textContent = "";
  })
  resetBtnEl.removeEventListener('click', resetGame)
  init();
}
//then: set up containers and have document automatically create elements
//then styling
//then: classes

// const main = document.querySelector('.main')
// const h1 = document.querySelector('span')
// console.log(main)
// console.log(h1)
// const santa = document.createElement('div')
// const moves = {x:50, y:30, w:40,dx:1, dy:1, speed:5, ani:{}, move:false}
// santa.width = ``