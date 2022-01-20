import React from "react";
import useTimeOut from "../2-useTimeout/useTimeout";

export default function useTimeout(callback, delay, dependencies) {
  const [reset, clear] = useTimeOut(callback, delay);
  React.useEffect(reset, [...dependencies, reset]);
  React.useEffect(clear, []);
}
