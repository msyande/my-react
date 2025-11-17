import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = <h1 className="heading">This is JSX Heading🚀</h1>;
console.log(jsxHeading); // Output: {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}

//Functional Component
const HeadingComponent1 = () => {
  return <h1 className="heading">This is a Functional Component Heading🔥</h1>;
};
console.log(HeadingComponent1()); // Output: {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}

const HeadingComponent2 = () => (
  <h1 className="heading">This is a Functional Component Heading🔥</h1>
); //HeadingComponent1 === HeadingComponent2

const Title = () => <h1>Mahima Yande</h1>; //Functional Component
const title2 = <h1>Siddharth Suchak</h1>; //React Element

//Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {title2}
      <h1 className="heading">This is a Functional Component Heading🔥</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
