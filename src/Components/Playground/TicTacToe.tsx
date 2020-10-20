import React, { Component } from 'react';
import "core-js/stable";
// eslint-disable-next-line
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { squareStates, currentPlayerState, gameEndSelector } from '../Store/Atoms';


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

  return (
    <div>
      {rows}
      <h2>
          {gameEndSelectorState ? 'game over' : null}
      </h2>
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
