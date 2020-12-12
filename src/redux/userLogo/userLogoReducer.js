import { FETCH_LOGO_F, FETCH_LOGO_R, FETCH_LOGO_S } from "./userLogoTypes";

const initialState = {
  loading: false,
  logo: "",
  error: "",
};

const userLogoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGO_R:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOGO_S:
      return {
        loading: false,
        logo: action.payload,
        error: "",
      };
    case FETCH_LOGO_F:
      return {
        loading: false,
        logo: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userLogoReducer;
