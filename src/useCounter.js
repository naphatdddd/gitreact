import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter(counter + 1);
  }
  function min() {
    setCounter(counter - 1);
  }
  return { counter, add, min };
};

export default useCounter;
