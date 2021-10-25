import React from "react";



export default function Tweet({name,msg}){
return(
<div className="tweet">
    <h3>{name}</h3>
    <h2>{msg}</h2>
    <p>No. of likes: </p>
</div>
)
}