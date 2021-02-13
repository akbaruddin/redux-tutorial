import { ADD } from "../action-types/todoActionTypes";

export const addItem = (item) => {
  return { type: ADD, payload: item }
}