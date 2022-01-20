import React from "react";
import useDebounce from "./useDebounce";

function DebounceComponent() {
  const [count, setCount] = React.useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </>
  );
}

export { DebounceComponent };
