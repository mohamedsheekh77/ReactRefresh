// This exercise will look to refine my skills in the useStae so i can become more confident using the useState. 
// I will ask ai to create a me an exercise and post the exercise and try to work on it without any help at all. 
// Goal: understand what useState actually does.
// Task:
// Create a number that starts at 0.
// Display it on the page.
// Add a button that says “Increase”.
// When you click it, the number goes up by 1.
// (You’ll learn: declaring state, updating it with setState.)

import { useState } from "react"

const NumberCount = () => {
    const [count, SetCount]= useState (0);
    
    const increaseCount = () =>{
        SetCount((prev)=> prev +1);
    }
    const decreaseCount = () =>{
        SetCount((prev)=> prev -1);
    }


    
    return(
        <div className="Number count">
            <p> Number counter:{count} </p>
            <button onClick={increaseCount} > Increase Counter </button>
            <button onClick={decreaseCount}> decrease </button>
        </div>
        
    )
}
export default NumberCount 

