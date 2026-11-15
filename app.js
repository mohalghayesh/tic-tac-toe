/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let turn = 'X';
let gameOver = false;
let movesPlayed = 0;

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

const square0El = document.getElementById('0');
const square1El = document.getElementById('1');
const square2El = document.getElementById('2');
const square3El = document.getElementById('3');
const square4El = document.getElementById('4');
const square5El = document.getElementById('5');
const square6El = document.getElementById('6');
const square7El = document.getElementById('7');
const square8El = document.getElementById('8');

/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `It's ${turn}'s turn`;

/*----------------------------- Event Listeners -----------------------------*/
square0El.addEventListener('click', () => {
  if (square0El.textContent !== '' || gameOver === true) {
    return;
  }

  square0El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square1El.addEventListener('click', () => {
  if (square1El.textContent !== '' || gameOver === true) {
    return;
  }

  square1El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square2El.addEventListener('click', () => {
  if (square2El.textContent !== '' || gameOver === true) {
    return;
  }

  square2El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square3El.addEventListener('click', () => {
  if (square3El.textContent !== '' || gameOver === true) {
    return;
  }

  square3El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square4El.addEventListener('click', () => {
  if (square4El.textContent !== '' || gameOver === true) {
    return;
  }

  square4El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square5El.addEventListener('click', () => {
  if (square5El.textContent !== '' || gameOver === true) {
    return;
  }

  square5El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square6El.addEventListener('click', () => {
  if (square6El.textContent !== '' || gameOver === true) {
    return;
  }

  square6El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square7El.addEventListener('click', () => {
  if (square7El.textContent !== '' || gameOver === true) {
    return;
  }

  square7El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

square8El.addEventListener('click', () => {
  if (square8El.textContent !== '' || gameOver === true) {
    return;
  }

  square8El.textContent = turn;
  movesPlayed++;

  if (
    (square0El.textContent === turn && square1El.textContent === turn && square2El.textContent === turn) ||
    (square3El.textContent === turn && square4El.textContent === turn && square5El.textContent === turn) ||
    (square6El.textContent === turn && square7El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square3El.textContent === turn && square6El.textContent === turn) ||
    (square1El.textContent === turn && square4El.textContent === turn && square7El.textContent === turn) ||
    (square2El.textContent === turn && square5El.textContent === turn && square8El.textContent === turn) ||
    (square0El.textContent === turn && square4El.textContent === turn && square8El.textContent === turn) ||
    (square2El.textContent === turn && square4El.textContent === turn && square6El.textContent === turn)
  ) {
    messageEl.textContent = `${turn} wins!`;
    gameOver = true;
    return;
  }

  if (movesPlayed === 9) {
    messageEl.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  messageEl.textContent = `It's ${turn}'s turn`;
});

resetBtnEl.addEventListener('click', () => {
  square0El.textContent = '';
  square1El.textContent = '';
  square2El.textContent = '';
  square3El.textContent = '';
  square4El.textContent = '';
  square5El.textContent = '';
  square6El.textContent = '';
  square7El.textContent = '';
  square8El.textContent = '';

  turn = 'X';
  gameOver = false;
  movesPlayed = 0;
  messageEl.textContent = `It's ${turn}'s turn`;
});
