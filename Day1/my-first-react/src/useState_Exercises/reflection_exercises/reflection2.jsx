// 🧩 Exercise: Counter (useState)

// Goal: Learn how to use React’s useState hook to update a value dynamically.

// Task:
// Create a component that:

// starts with a count of 0

// displays the current count

// has two buttons: Increase and Decrease

// updates the count when you click the buttons
import { useState } from "react";
const LikeCount = () => {
    const [count, SetCount] = useState (0);

    const increaseCount = () => {
        SetCount ((prev)=> prev +1);
    }
        const decreaseCount = () => {
            SetCount ((prev)=> prev +1);
        }



    return(
        <div className="LikeCounterGame">
        <h1> Like Counter Game </h1>
        <p> welcome to my like counter game </p>
        <p> Current Counter : {count} </p>
        <button onClick={increaseCount}> Increase Count + </button>
        <button onClick={decreaseCount}> Decrease Count - </button>
        </div>
    )
}
export default LikeCount

