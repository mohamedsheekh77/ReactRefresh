// 🧠 Exercise: “Step Counter 🦶”
// Create a mini app that:
// Starts with 0 steps.
// Has a button to add 1 step each time you press it.
// Has another button to add 10 steps at once.
// Has a reset button to go back to 0.
// (Optional bonus): Display a small message like “Keep going!” when steps reach 50 or more.
import { useState } from "react";

const StepCounterApps =()=> {
    const [count, setStepCounter] = useState (0);
    const incCountSteps =()=> { 
        setStepCounter ((prev) => prev +1)
    }
    const incCountStepsten =()=> { 
        setStepCounter ((prev) => prev +10)
    }
    const resetCountStep =()=> { 
        setStepCounter (0)
    }

    return(
        <div className="StepCounterApp">
            <h1> Welcome to StepCounter App </h1>
            <p> Count:{count}</p>
            <button onClick={incCountSteps}> Add a 1 step each step you walk </button>
            <button onClick={incCountStepsten}> Add 10 steps each step you walk </button>
            <button onClick={resetCountStep}> Reset your steps back to 0 </button>
        </div>
    )
}
export default StepCounterApps