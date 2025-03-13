

// First Methods

// function Multipleprops(props) {
//     return (
//       <h1 className={props.className}>
//         Hello, {props.name}! You are {props.age} years old and live in {props.city}.
//       </h1>
//     );
//   }

// export default Multipleprops;
  

  
// 2nd method

function Multipleprops({ name, age, city, className }) {
    return (
      <h1 className={className}>
        Hello, {name}! You are {age} years old and live in {city}.
      </h1>
    );
  }


    export default Multipleprops;




   