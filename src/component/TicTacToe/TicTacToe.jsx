import React, { useState } from 'react'
import assets from '../assets/assets'



let data = ["","","","","","","","",""];


export const TicTacToe = () => {
  let [count,setCount] = useState("0");
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);


const toggle = (e,num) =>{
  if (lock){
    return 0;
  }
  if (count % 2 === 0){
    e.target.innerHTML = `<img src = '${assets[0]}'>`;
    data[num] = "x";
    setCount (++count)
  }
  else{
    e.target.innerHTML = `<img src = '${assets[1]}'>`;
    data[num] = "o";
    setCount (++count)
  }
  checkWin ();
}


  //check winor lose
  const checkWin = () =>{
    if (data[0] === data[1] && data[1]===data[3] && data [2]!==""){
      won(data[2]);
    }
    else if (data[3] === data[4] && data[4]===data[5] && data [5]!==""){
won(data[5]); 
  }

  else if (data[6] === data[7] && data[7]===data[8] && data [8]!==""){
    won(data[8]); 
      }
      else if (data[0] === data[3] && data[3]===data[6] && data [6]!==""){
        won(data[6]);
      }
      else if (data[1] === data[4] && data[4]===data[7] && data [7]!==""){
        won(data[7]);
      }
      else if (data[2] === data[5] && data[5]===data[8] && data [8]!==""){
        won(data[8]);
      }
      else if (data[0] === data[4] && data[4]===data[8] && data [8]!==""){
        won(data[8]);
      }
      else if (data[0] === data[1] && data[1]===data[2] && data [2]!==""){
        won(data[2]);
      }
      else  if (data[2] === data[4] && data[4]===data[6] && data [6]!==""){
        won(data[6]);
      }
      


  const won = (winner) =>{
    setLock(true);
    if (winner==="x"){
      titleRef.current.innerHTML = `Congratulations: <img src = ${assets[0]}`>
    }
    else{
      titleRef.current.innerHTML = `Congratulations: <img src = ${assets[1]}`>

    }
  }

};

  return (

<>
<div className="container  justify-center">
    <h1 className='mt-12 font-bold white text-xl flex justify-center items-center' ref={titleRef}>Tic Tac Toe Game <span className='text-green-600'>-In React</span></h1>
    <div className="board  flex m-auto justify-center">
      <div className="row1">
        <div  onClick={(e)=>{toggle(e,0)}}  className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer "></div>
        <div onClick={(e)=>{toggle(e,1)}}  className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
        <div  onClick={(e)=>{toggle(e,2)}} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
      </div>
      <div className="row2">
        <div  onClick={(e)=>{toggle(e,3)}} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
        <div  onClick={(e)=>{toggle(e,4)}} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
        <div  onClick={(e)=>{toggle(e,5)}} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
      </div>


      <div className="row3"> 
        <div onClick={(e)=>{toggle(e,6)}}  className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
        <div  onClick={(e)=>{toggle(e,7)}} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
        <div  onClick={(e)=>{toggle(e,8)}} className="boxes flex h-44 w-44 bg-purple-400 rounded-sm border-4 cursor-pointer"></div>
      </div>

    </div>
<div className="button ">
   <button className="reset  w-16 h-7 border-none outline-none cursor-pointer rounded-md bg-gray-400 font-medium text-xl text-green-300">
      Reset
    </button>
</div>
   
</div>
</>

    // <div>TicTacToe
    //     <img src={assets[0]} alt="circle" />
    // </div>
  );
};
