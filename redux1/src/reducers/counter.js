
//import { createStore } from "redux";
//import decrement from "../actions/decrement";
//import increment from "../actions/increment";


const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};



export default counterReducer;
