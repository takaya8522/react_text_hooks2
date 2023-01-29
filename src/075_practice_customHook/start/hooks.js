import { useState } from "react";


export const useCount = () => {
  const [ count, setCount ] = useState(0);
  const countUp = () => setCount((state) => state + 1);
  return { count, countUp };
}