import { useState } from "react";    // step 1. Import useState Hook

// React ka useState hook import kiya jo state manage karne ke liye use hota hai.
// Iska kaam component ke andar ek variable (state) create karna aur usko update karna hai.
// Without useState, React component dynamic changes nahi dikha sakta.


//Step 2: State Create Karna

function ClickCounter() {        // ✅ Normal JavaScript Function
const [count, setCount] = useState(0);     // ✅ React Hook (useState)
 


// 
// count ek variable hai aur setCount ek function hai

// magar humen first veriable rakhna second function rakhna ha 

// veriable ka koye be rakh sakhte ho or function ka be

//React Hooks ke functions ka naam small-case se shuru hota hai


/* count ek state variable hai jo clicks count karega.
setCount ek function hai jo count ko update karega.
useState(0) ka matlab hai ki initially count = 0 hoga.  */


// 💡 State kya hai?
//  State ek dynamic value hai jo UI me changes show karne ke liye use hoti hai. 
//  Jaise jaise state update hoti hai, UI bhi update hota hai.


//Step 3: Event Handler Function

function handleClick() {                                   // handleClick built-in method nahi hai, ye ek normal function hai.
    new Audio("https://www.myinstants.com/media/sounds/button-click.mp3").play();
    setCount(count + 1);
    
  }
  


  function handleDecrement() {
    if (count > 0) {
        // new Audio("https://www.myinstants.com/media/sounds/pop.mp3").play();
        new Audio("https://www.myinstants.com/media/sounds/button-click.mp3").play();
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0); // ✅ Count ko 0 set kar diya
  }




  function getEvenOddText(click) {
    if (click % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
      

// ✅ Background color logic (Even → Light Blue, Odd → Light Pink)
const bgColor = count % 2 === 0 ? "lightblue" : "lightpink";



  return (                          // ✅ JSX (React ka UI)
    <div
    
    style={{
        backgroundColor: bgColor,
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
        transition: "background-color 0.8s ease-in-out",
      }}
    
    >



        <h1 style={{color:"Blue"}}> Mouse Event Examples </h1>
 

        <p style={{ fontSize: "25px" }}>Click Count: {count}</p>
     
        {count === 10 && <p style={{ color: "purple", fontSize: "18px" }}>🎉 Wow! You reached 10 clicks!</p>}

      
      {/* ✅ Ye ab if-else wala version hai */}
      {count > 0 && (
        <p style={{ fontSize: "20px" }} >
          This number is: <strong style={{ fontSize: "20px", color: count % 2 === 0 ? "blue" : "green" }}> {getEvenOddText(count)}</strong>
        </p>
      )}






      <button onClick={handleClick} style={{ margin: "10px" }}>Increase</button>
      <button onClick={handleDecrement} disabled={count === 0} style={{ margin: "10px" }}>Decrease</button>
      <button onClick={handleReset}   disabled={count === 0} style={{ margin: "10px" }}>Reset</button>
    </div>
  );
}

export default ClickCounter;