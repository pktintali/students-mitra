import { BLUE, DARK } from "./themeTypes";
import getInitialMode from "./initialMode";

const initialState = {
  dark: getInitialMode(),
  blue: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK:
      localStorage.setItem("dark", !state.dark);
      return {
        ...state,
        dark: !state.dark,
      };
    case BLUE:
      return {
        ...state,
        blue: !state.blue,
      };
    default:
      return state;
  }
};

export default themeReducer;
