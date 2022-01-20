import React from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = React.useState(defaultValue);

  function push(element) {
    setArray((prevArray) => [...prevArray, element]);
  }

  function filter(callback) {
    setArray((prevArray) => prevArray.filter(callback));
  }

  function update(index, newElement) {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      newElement,
      ...prevArray.slice(index + 1, prevArray.length),
    ]);
  }

  function remove(index) {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      ...prevArray.slice(index + 1, prevArray.length - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }
  return { array, set: setArray, push, filter, update, remove, clear };
}
