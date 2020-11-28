import { ADD_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
  noOfCreams: 20,
}
 
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ICE_CREAM:
      return {
        ...state,
        noOfCreams: state.noOfCreams + action.payload,
      };
    default:
      return state;
  }
}

export default iceCreamReducer