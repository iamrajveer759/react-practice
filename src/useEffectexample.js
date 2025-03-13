import { useState, useEffect } from "react";

function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Count changed:", count);
    }, [count]);  // Runs when `count` updates
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }

export default UseEffectExample;
