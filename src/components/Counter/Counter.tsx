import { useCount } from "../../domain/count/hooks";

export const Counter = () => {
  const { count, incrementCount, decrementCount, resetCount } = useCount();

  return (
    <>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <h3>{count}</h3>
      <button onClick={resetCount}>Reset</button>
    </>
  );
};
