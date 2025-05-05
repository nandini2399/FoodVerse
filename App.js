import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"Hello world from React"); // I can pass attributes in the {} object  like id:"heading"
// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"I am H1 Tag"),
//         React.createElement("h2",{},"I am H2 Tag")]
//     )
// ); // I can pass attributes in the {} object  like id:"heading"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent)/

//React Element
const jsxHeading = <h1 className="head">Namaste React using React Element</h1>;

const Title = () => {
  return (
    <div>
      <h1 className="head">Namaste React 🚀 using React Component</h1>
      
    </div>
  );
};

const NextTitle = () =>{
    return <h2>Learning with Akshay is so much fun!! 😁</h2>
}

//React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
        <Title />
        {Title()}
        {console.log("Hello")}
        <NextTitle />  
      <h2 className="head">By Nandini Jairath</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading)
root.render(<HeadingComponent />); //This is the syntax that babel understands
