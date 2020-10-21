import React, { Component } from 'react';
import "core-js/stable";
import { RecoilRoot, Resetter, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { squareStates, currentPlayerState, gameEndSelector} from '../Store/Atoms';

const boardSize = 3;


export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

const Board = (props) => {

  const gameEndSelectorState = useRecoilValue(gameEndSelector)

  const rows = Array(boardSize).fill(null).map((el, i) => {
    return <Row 
      key={`row-${i}`}
      rowIndex={i}
    />
  })

  const resetCurrentPlayerState = useResetRecoilState(currentPlayerState);

  let resetSquare1 = useResetRecoilState(squareStates[0])
  let resetSquare2 = useResetRecoilState(squareStates[1])
  let resetSquare3 = useResetRecoilState(squareStates[2])
  let resetSquare4 = useResetRecoilState(squareStates[3])
  let resetSquare5 = useResetRecoilState(squareStates[4])
  let resetSquare6 = useResetRecoilState(squareStates[5])
  let resetSquare7 = useResetRecoilState(squareStates[6])
  let resetSquare8 = useResetRecoilState(squareStates[7])
  let resetSquare9 = useResetRecoilState(squareStates[8])
  
  const restartButton = () => {
     resetCurrentPlayerState();
     resetSquare1();
     resetSquare2();
     resetSquare3();
     resetSquare4();
     resetSquare5();
     resetSquare6();
     resetSquare7();
     resetSquare8();
     resetSquare9();
     
  }

  return (
    <div>
      {rows}
      <h2>
          {gameEndSelectorState ? 'game over' : null}
      </h2>
      <button className="grey-button smaller-button" type="button" onClick={restartButton}>Restart</button>
    </div>
  )
}

const Row = (props) => {

  const { rowIndex } = props

  let boxes = Array(boardSize).fill(null).map((elem, i) => {
    return <Box 
      key={'box-' + i}
      rowIndex={rowIndex} 
      boxIndex={i}
    />
  });

  return (
    <div>
      {boxes}
    </div>
  )
}

const Box = (props) => {

  const { rowIndex, boxIndex } = props;
  const [squareState, setSquareState] = useRecoilState(squareStates[(rowIndex * boardSize) + boxIndex]);
  const [currentPlayer, setCurrentPlayerState] = useRecoilState(currentPlayerState);
  const gameEndSelectorState = useRecoilValue(gameEndSelector);

  return (
    // <div className={props.isWinBox ? "box box-win" : "box"} onClick={() => props.boardUpdate(props.rowIndex, props.boxIndex)}>
    <div className={props.isWinBox ? "playground-box playground-box-win" : "playground-box"} onClick={() => {
      if (!gameEndSelectorState && squareState === '-') {
        setSquareState(currentPlayer)
        if (currentPlayer === 'X')
          setCurrentPlayerState('O')
        else
          setCurrentPlayerState('X')
      }
    }}>
      {squareState}
    </div>
  );
}
