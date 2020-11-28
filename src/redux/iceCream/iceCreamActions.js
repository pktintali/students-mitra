import { ADD_ICE_CREAM } from "./iceCreamTypes";

export const buyCream = (num = 1) => {
    const intNum = parseInt(num)
  return {
    type: ADD_ICE_CREAM,
    payload: intNum,
  };
};
