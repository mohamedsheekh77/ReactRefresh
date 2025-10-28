// 🧩 Exercise: Counter (useState)

// Goal: Learn how to use React’s useState hook to update a value dynamically.

// Task:
// Create a component that:

// starts with a count of 0

// displays the current count

// has two buttons: Increase and Decrease

// updates the count when you click the buttons
import { useState } from "react";
const LikeCount =()=>{
    const [count, SetCount] = useState(0);

    const increaseLikeCount =()=>{
        SetCount ((prev)=> prev+1)
    
}
const decreaseLikeCount =()=>{
    SetCount ((prev) => {                                                  
        if (prev <=0) {
            return 0
        } else {
        return prev-1;
    }
    });
}

const resetLikeCount =()=>{
    SetCount ((0))
}


    return (
        <div className="LikeCounterGame">
            <p> welcome to my game, pleake like to increase like count and unlike to decrease like count</p>
            <button onClick={increaseLikeCount} > Like </button>
            <button onClick={decreaseLikeCount} > Unlike </button>
            <button onClick={resetLikeCount} > Reset </button>
        </div>
    )
}


export default LikeCount