import React, {useState} from "react";
import "./App.css";

export default function App(){
  const [count, setCount] = useState(0);
  const [swetch, setSwetch] = useState("counter");
  const [status, setStatus] = useState(false);
  const increase =()=>{
    setCount(count+1);
    setSwetch("counter increase");
    setStatus(true);
  }
  const decrease =()=>{
    setCount(count-1);
    setSwetch("counter decrease");
    setStatus(false);
  }
  return(
    <div className="app">
      <h1 className={status?"grien":"ried"}>{swetch}</h1>
      <div className="tweet">
      <button onClick={increase}>+</button>
      <h2>{count}</h2>
      <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}