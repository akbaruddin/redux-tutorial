import { createStore } from "redux";
import { ADD } from "../action-types/todoActionTypes";

const initState = {
  items: []
}

const reducer = (state=initState, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case ADD:
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);