import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter((counter) => counter);
  };

  return {
    counter,
    increment,
    decrement,
    resetCounter,
  };
};

export default useCounter;
