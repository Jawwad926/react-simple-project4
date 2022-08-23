import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => {
          return prevCounter + 1;
        });
      } else {
        setCounter((prevCounter) => {
          return prevCounter - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(interVal);
    };
  }, [forwards]);

  return counter;
};

export default useCounter;
