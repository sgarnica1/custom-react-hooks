import React from "react";
import useUpdateEffect from "./useUpdateEffect";

function UpdateEffectComponent() {
  const [count, setCount] = React.useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </>
  );
}

export { UpdateEffectComponent };
