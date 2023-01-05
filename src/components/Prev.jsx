import React, { useState } from "react";

function Prev() {
  const initial = 0;

  const [count, setCount] = useState(initial);
  const Incrementby = () => {
    for (let i = 0; i < 50; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        inrement
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}></button>
      <button onClick={() => setCount(initial)}></button>
      <button onClick={Incrementby}></button>
    </div>
  );
}

export default Prev;
