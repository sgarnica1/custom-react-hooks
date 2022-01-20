import React from "react";
import useTimeout from "./useTimeout";

function TimeoutComponent() {
  const [count, setCount] = React.useState(10);
  const [reset, clear] = useTimeout(() => setCount(0), 1000);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </>
  );
}

export { TimeoutComponent };
