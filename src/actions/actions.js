import {INCREMENT, DECREMENT} from "../constants/constants";

export const incrementfun = () => {
  return {type:INCREMENT}
}

export const decrementfun = () => {
  return {type:DECREMENT}
}
