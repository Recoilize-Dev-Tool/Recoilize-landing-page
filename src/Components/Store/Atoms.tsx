import {atom, selector} from 'recoil';

// export const id = atom({
//   key: 'id',
//   default: 1,
// });

export const playStart = atom({
  key: 'playStart',
  default: false,
});

// TicTacToe Atoms & Selectors
// Refactor to move selectors to selectors.tsx

export const boardSize = 3;

export const squareStates = Array(boardSize * boardSize).fill(null).map((el, i) => (
  atom({
    key: `square-${i}`,
    default: '-',
  })
))

export const currentPlayerState = atom({
  key: 'currentPlayerState',
  default: 'X',
})

export const gameEndSelector = selector({
  key: 'gameEndSelector',
  get: ({get}) => {

    const board = Array(boardSize).fill(null).map((el, i) => {
      const row: string[] = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(get(squareStates[(i * boardSize) + j]))
      }
      return row;
    })

    return checkWinState(get(currentPlayerState), board);

    // return something
  }
})

// check win state, call from componentDidUpdate lifecycle
function checkWinState(currentPlayer, board) {

  const checkPlayer = currentPlayer === 'X' ? 'O' : 'X';
  // eslint-disable-next-line
  let winBoxes;

  // check each row
  for (let i = 0; i < board.length; i++) {
    if (board[i].join('') === checkPlayer.repeat(3)) {
      winBoxes = [`${i}0`, `${i}1`, `${i}2`];
      return true;
    }
  }

  // check each column
  const columnArray = ['', '', ''];
  for (let i = 0; i < board.length; i++) {
    // reset win boxes for every column
    for (let j = 0; j < board[i].length; j++) {
      // i = number of rows
      // j = number of columns
      columnArray[j] += board[i][j];
    }
  }

  for (let i = 0; i < columnArray.length; i++) {
    if (columnArray[i] === checkPlayer.repeat(3)) {
      winBoxes = [`0${i}`, `1${i}`, `2${i}`];
      return true;
    }
  }

  // check each diagonal
  // TODO: make this more dynamic, rather hard coded.
  const diagArray = ['', ''];

  diagArray[0] += board[0][0] + board[1][1] + board[2][2];
  diagArray[1] += board[0][2] + board[1][1] + board[2][0];

  for (let i = 0; i < diagArray.length; i++) {
    if (diagArray[i] === checkPlayer.repeat(3)) {
      return true;
    }
  }

  return false;
}