// 🧠 Exercise: “Like Counter App”
// Goal: Keep practising useState with interactive logic.
// Scenario:
// You’re building a social media post card.
// Each time a user clicks the “❤️ Like” button, the number of likes should increase.
// When the user clicks “💔 Unlike”, it should decrease.
// Your Tasks
// Create a React component called LikeCounter.
// Use useState(0) to keep track of how many likes there are.
// Display a message like:
// "Likes: 0"
// (and this number should update when buttons are pressed)
// Add two buttons:
// One to increase likes (❤️ Like)
// One to decrease likes (💔 Unlike)
// Bonus:
// Prevent the likes from going below 0.
// When likes are greater than 10, display a special message:
// "🔥 You’re popular!"

// 🧠 Exercise: “Like Counter App”
// Goal: Keep practising useState with interactive logic.
// Scenario:
// You’re building a social media post card.
// Each time a user clicks the “❤️ Like” button, the number of likes should increase.
// When the user clicks “💔 Unlike”, it should decrease.
// Your Tasks
// Create a React component called LikeCounter.
// Use useState(0) to keep track of how many likes there are.
// Display a message like:
// "Likes: 0"
// (and this number should update when buttons are pressed)
// Add two buttons:
// One to increase likes (❤️ Like)
// One to decrease likes (💔 Unlike)
// Bonus:
// Prevent the likes from going below 0.
// When likes are greater than 10, display a special message:
// "🔥 You’re popular!"

import {useState} from "react";
const LikeCounts =()=>{
const [LikeCount, SetLikeCount]= useState (0);
const increaselikeCount =()=>{
    SetLikeCount((prev)=> prev +1);
}
const decreaselikeCount =()=>{
    SetLikeCount((prev) => {
        if (prev<=0) {
          return prev ;
        } else {
          return prev-1;
        }
      });

    return(
        <div className="LikeButton">
            <h1> media page</h1>
            <p>Number of likes :{LikeCount}</p>
            <button onClick={increaselikeCount}> Like </button>
            <button onClick={decreaselikeCount}> Unlike </button>
        </div>
    )
}}
export default LikeCounts;