import { FETCH_LOGO_F, FETCH_LOGO_R, FETCH_LOGO_S } from "./userLogoTypes";
import firebase from "../../components/firebase";
export const fetchLogoR = () => {
  return {
    type: FETCH_LOGO_R,
  };
};

const fetchLogoS = (user) => {
  return {
    type: FETCH_LOGO_S,
    payload: user,
  };
};

const fetchLogoF = (error) => {
  return {
    type: FETCH_LOGO_F,
    payload: error,
  };
};

export const fetchLogo = () => {
  return (dispatch) => {
    dispatch(fetchLogoR);
    firebase
      .isInitialized()
      .then((v) => {
        const logo = firebase.getDpImage();
        dispatch(fetchLogoS(logo));
      })
      .catch((e) => {
        const error = e.message;
        dispatch(fetchLogoF(error));
      });
  };
};
