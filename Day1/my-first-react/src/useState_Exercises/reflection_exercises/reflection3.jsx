import { useState } from "react";
const LikeCount =()=>{
    const [count, SetCount] = useState(0);

    const increaseLikeCount =()=>{
        SetCount ((prev)=> prev+1)
    
}
const decreaseLikeCount =()=>{
    SetCount((prev) => {
        if (prev<=0) {
          return prev ;
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
            <p> Count : {count} </p>
            <button onClick={increaseLikeCount} > Like </button>
            <button onClick={decreaseLikeCount} > Unlike </button>
            <button onClick={resetLikeCount} > Reset </button>
        </div>
    )
}


export default LikeCount 