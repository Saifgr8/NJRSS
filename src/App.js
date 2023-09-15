import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <StrictMode>
        <Navbar />
        <Body />
        <Footer />
      </StrictMode>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


