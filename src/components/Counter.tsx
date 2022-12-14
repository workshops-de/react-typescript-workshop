import { useCount } from "../domain/count/hooks";

export const Counter = () => {
  const { count, incrementCount, decrementCount, resetCount } = useCount();

  return (
    <div className="counter">
      <button className="secondary" onClick={decrementCount}>
        -
      </button>
      <h2>{count}</h2>
      <button className="secondary" onClick={incrementCount}>
        +
      </button>
      <button className="tertiary" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};
