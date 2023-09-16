import React from "react";
import { useState } from "react";

function Addition(TypedNum1, TypedNum2) {
  return parseFloat(TypedNum1) + parseFloat(TypedNum2);
}
function Subtraction(TypedNum1, TypedNum2) {
  return parseFloat(TypedNum1) - parseFloat(TypedNum2);
}
function Multiplication(TypedNum1, TypedNum2) {
  return parseFloat(TypedNum1) * parseFloat(TypedNum2);
}
function Division(TypedNum1, TypedNum2) {
  return parseFloat(TypedNum1) / parseFloat(TypedNum2);
}
console.log(Addition(10, 20));

function Prac() {
  const count = 0;
  const [TypedNum1, setTypedNum1] = useState();
  const [TypedNum2, setTypedNum2] = useState();
  const [PerformOperation, setPerformOperation] = useState();
  const [Reset, setReset] = useState("");
  const [Cnt, setCnt] = useState(0);

  const handleResetClick = () => {
    setTypedNum1("");
    setTypedNum2("");
    setPerformOperation("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          prefix="Number1"
          value={TypedNum1}
          onChange={(e) => {
            setTypedNum1(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            setPerformOperation(Addition(TypedNum1, TypedNum2))
            setCnt(Cnt+1);
        }}
        >
          +
        </button>

        <input
          type=" text"
          prefix="Number2"
          value={TypedNum2}
          onChange={(e) => {
            setTypedNum2(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            setPerformOperation(Addition(TypedNum1, TypedNum2));
            setCnt(Cnt + 1);
          }}
        >
          =
        </button>

        <input type="text" prefix="Result" value={PerformOperation}></input>
      </div>
      <div>
        <button
          onClick={() => {
            setPerformOperation(Addition(TypedNum1, TypedNum2));
            setCnt(Cnt+1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setPerformOperation(Subtraction(TypedNum1, TypedNum2));
            setCnt(Cnt+1);
          }}
        >
          -
        </button>
        <button
          onClick={() =>
            {
                setPerformOperation(Multiplication(TypedNum1, TypedNum2));
                setCnt(Cnt+1);
              }}
        >
          *
        </button>
        <button
          onClick={() => {
            setPerformOperation(Division(TypedNum1, TypedNum2));
            setCnt(Cnt+1);
          }}
        >
          /
        </button>
        <button onClick={handleResetClick}>RESET</button>
      </div>
      <div>
        <button>Count = </button>
        <input type="text" value={Cnt} onChange={(e) =>{
            setCnt(e.target.value);
        }}></input>
      </div>
    </>
  );
}
export default Prac;
