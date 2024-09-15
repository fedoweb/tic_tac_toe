let players = ['x', 'o'];
let activePlayer;
let board; //игровое поле
let boardSize = 3; //размер поля


function startGame() {
  activePlayer = 0;
  board = [];        // обнуляем массив

  for (let i = 0; i < boardSize; i++) { //заполняем массив
    board.push([]);
    for (let j = 0; j < boardSize; j++) {
      board[i].push('');
    }
  }

  renderBoard(board); //отрисовываем поле
}


function click(stringNumber, cellNumber) {
  board[stringNumber][cellNumber] = players[activePlayer];
  
  renderBoard(board);   //отрисовываем поле

  checkWinner(stringNumber, cellNumber); //проверка победы

  changePlayer();   //смена хода
}


function changePlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
}


function checkWinner(stringNumber, cellNumber) {  
  let winnerStatus;
  
// проверка строки
  for (let i = 1; i < boardSize; i++) {
    winnerStatus = true;
    if (board[stringNumber][i] !== board[stringNumber][0] || board[stringNumber][0] === '') {
      winnerStatus = false;
      break; // Прерываем проверку строки если элемент не равен
    }
  }  
  if (winnerStatus) {
    showWinner(activePlayer);
  }

//проверка столбца   
  for (let i = 1; i < boardSize; i++) {
    winnerStatus = true;
    if (board[i][cellNumber] !== board[0][cellNumber] || board[0][cellNumber] === '') {
        winnerStatus = false;
        break;
    }
  }
  if (winnerStatus) {
    showWinner(activePlayer);
  }

// Проверка диагонали слева направо
  winnerStatus = true;
  for (let i = 1; i < boardSize; i++) {
    if (board[i][i] !== board[0][0] || board[0][0] === '') {
        winnerStatus = false;
      break;
    }
  }
  if (winnerStatus) {
    showWinner(activePlayer);
  }

// Проверка диагонали справа налево
  winnerStatus = true;
  for (let i = 1; i < boardSize; i++) {
    if (board[i][boardSize - 1 - i] !== board[0][boardSize - 1] || board[0][boardSize - 1] === '') {
        winnerStatus = false;
      break;
    }
  }
  if (winnerStatus) {
    showWinner(activePlayer);
  }      
}

  
