import React, { useState } from "react";
import "./App.css"
import Tweet from "./tweet";

export default function App(){
  const [user, setuser] = useState([
    {name: "sam", greet:"hi! there"},
    {name: "Ram", greet:"Namaste"},
    {name: "haruki", greet:"Arigato"},
    {name: "javir", greet:"hola"},
    {name: "salim", greet:"awk"}
  ]);
  return(
    <div className="app">
      <h1>hello reacted</h1>
      {user.map(user =>(
        <Tweet  name={user.name} greet={user.greet}/>
      ))}
    </div>
  );
}