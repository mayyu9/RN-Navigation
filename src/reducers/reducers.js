import {INCREMENT, DECREMENT} from "../constants/constants";

const Reducers = (state= {counter: 0}, action) =>{
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        counter: state.counter + 1
      }
      break;
    case DECREMENT:
      return {
        ...state,
        counter: state.counter -1
      }
      break;
    default:
      return state;
  }
};

export default Reducers;
