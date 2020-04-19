import React, { Component } from 'react';


let food = prompt("Type favorite food", "");

const message = () => {
    if(food===null || food==="") {
      alert("You Entered Nothing");
    } else { 
      alert("your favorite food is " + food);
    } 
}

function App() {
  return (
    <div>
      <h1 onClick={ () => message()} > Click This Text to show food </h1>  
    </div>
  );
}

export default App; 