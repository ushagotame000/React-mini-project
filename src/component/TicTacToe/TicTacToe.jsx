import React, { useState, useRef } from 'react';
import assets from '../assets/assets';

let initialData = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(initialData);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num]) {
      return;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${assets[0]}'>`;
      newData[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${assets[1]}'>`;
      newData[num] = "o";
    }
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (newData) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        won(newData[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations:  <img  src='${assets[0]}' Winner class='w-16 bg-gray-100 rounded-full'> Winner`;
    } else {
      titleRef.current.innerHTML = `Congratulations:   <img src='${assets[1]}' class='w-16 bg-gray-100 rounded-full' >Winner`;
    }
  };

  const resetGame = () => {
    setData(initialData);
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = 'Tic Tac Toe Game <span className="text-green-600">-In React</span>';
    document.querySelectorAll('.boxes').forEach(box => box.innerHTML = '');
  };

  return (
    <>
      <div className="container justify-center bg-black h-screen w-screen">
        <h1 className=" text-white p-10 font-bold white text-3xl flex justify-center items-center" ref={titleRef}>
          Tic Tac Toe Game <span className="text-green-500">-In React</span>
        </h1>
        <div className="board flex m-auto justify-center mt-9">
          <div className="row1">
            {[0, 1, 2].map(num => (
              <div key={num} onClick={(e) => toggle(e, num)} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
            ))}
          </div>
          <div className="row2">
            {[3, 4, 5].map(num => (
              <div key={num} onClick={(e) => toggle(e, num)} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
            ))}
          </div>
          <div className="row3">
            {[6, 7, 8].map(num => (
              <div key={num} onClick={(e) => toggle(e, num)} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
            ))}
          </div>
        </div>
        <div className="button flex justify-center pt-4">
          <button onClick={resetGame} className="reset w-16 h-7 border-none outline-none cursor-pointer rounded-md bg-purple-400 font-medium text-xl text-white ">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
