import React, { useState } from "react";

function Ohook() {
  const [name, setName] = useState({ first: "", seconde: "" });
  return (
    <div>
      <input
        type="text"
        value={name.first}
        onChange={(e) => setName({ ...name ,first: e.target.value })}
      />
      <input
        type="text"
        value={name.seconde}
        onChange={(e) => setName({ ...name ,seconde: e.target.value })}
      />
      <h1> {name.first} </h1>
      <h1> {name.seconde} </h1>
    </div>
  );
}

export default Ohook;
