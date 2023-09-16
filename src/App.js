import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Prac from "./components/Prac";
 
function App() {
  return (
    <>
      <StrictMode>
        <Navbar />
        <Body />
        {/* <Prac /> */}
        <Footer />
      </StrictMode>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function Arr(nums) {
  return nums.map((s) => {
    return s % 2 === 0 ? s * 2 : s * 3;
  });
}
console.log(Arr([1, 2, 3, 4, 5]));
