import { useDispatch, useSelector } from "react-redux";
import { countSelector, decrement, increment, reset } from "../../store/count";

/**
 * Custom hook to use the count state and actions
 */
export const useCount = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const resetCount = () => {
    dispatch(reset());
  };

  return {
    count,
    incrementCount,
    decrementCount,
    resetCount,
  };
};
