import React from "react";
import { useSelector } from "react-redux";

// it is like suscribe to the store 

const Counter = () => {
  //update coming from reducers to update the counter for that counter must have access to state .
  const count = useSelector((state) => state);
  return (
    <div className="counter">
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;

//But we donot do work like this way.
