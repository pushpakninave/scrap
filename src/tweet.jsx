import React from "react";



export default function Tweet({name,greet}){
return(
<div className="tweet">
    <h3>{name}</h3>
    <h2>{greet}</h2>
    {/* <p>No. of likes: </p> */}
</div>
)
}