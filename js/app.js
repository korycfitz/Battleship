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
//Board Class
  //constructor 
    //board: => 2d array(n x n) => 10 arrays of length 10, nested in an outter array
    //ship location: object => (   keys = shipName,    value = [[row,col], [row,col]  )





//PlayerClass
    //constructor 
