import {useState, useEffect} from "react";

function useCounter(direction) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + direction);
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
}

export default useCounter;
