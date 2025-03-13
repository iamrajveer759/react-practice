import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);  // count ki initial value 0 hai

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;

/*  useState(0) React ka built-in hook hai, jo React se aata hai.
Agar tum useState import nahi karoge, toh error aayega. */