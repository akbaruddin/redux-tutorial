import { HIGHT_INCREASE, DEEP_INCREASE, LENGTH_INCREASE } from "./action-type.js";

export const deepIncrease = () => {
  return { type: DEEP_INCREASE };
}

export const heightIncrease = () => {
  return { type: HIGHT_INCREASE };
}

export const lengthIncrease = () => {
  return { type: LENGTH_INCREASE };
}