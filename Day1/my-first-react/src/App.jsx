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

