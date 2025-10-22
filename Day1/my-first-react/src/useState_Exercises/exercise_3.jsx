// 🧠 Exercise: “Click Counter”
// Create a small app with:
// A button that says “Click me”.
// A piece of text that shows how many times the button has been clicked.
// A “Reset” button that sets the count back to zero.

import { useState } from "react";
const showCountClicks =()=>{
const [count, setShowCount] = useState(0);


const restClickCount =()=>{
    setShowCount ((0));
}

const increaseClickCount =()=>{
    setShowCount((prev)=> prev +1);
}
    return(
        <div className="ClickMeButton">
            <h1>
                Click me Button Page Exercise
            </h1>
            <button onClick={increaseClickCount}> Click me </button> 
            <p> count:{count}</p>
            <button onClick={restClickCount}> Reset the count button </button>
        </div>
    )
}

export default showCountClicks;