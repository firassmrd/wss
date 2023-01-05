import React, { useState } from "react";

function Conteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} button>
        Conteur {count}
      </button>
    </div>
  );
}

export default Conteur;
