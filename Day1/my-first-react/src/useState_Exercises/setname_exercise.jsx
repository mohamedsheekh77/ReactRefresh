import { useState } from "react";

const UseStateString = () => {
  const initialName = "Guest";
  const [name, setName] = useState(initialName);

  const updateName = () => {
    setName("SpongeBob");
  };

  const resetName = () => {
    setName(initialName);
  };

  return (
    <div className="testing">
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <button onClick={resetName}>Reset Name</button>
    </div>
  );
};

export default UseStateString;
