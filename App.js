import React from "react";
import ReactDOM from "react-dom/client";
//React component

//React element
const FooterComponent = () => {
  return (
    <div>
      <h2>Lets begin</h2>
      <h3>Shall we?...</h3>
    </div>
  );
};


function spell(word){
  return word;
}

const HeadingComponent = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I am Saif</h2>
      <button>{spell("Can we begin?")}</button>
      <HeadingComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(header); //way to call create element
root.render(<HeadingComponent />); //way to call react component
