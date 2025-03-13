import React from "react";
import "./index.css";

function Greeting(props) {
  return <h1 className={props.className}>Hello, {props.name}!</h1>;
}

export default Greeting;
 



//  Greeting({ name = "Guest" }) {