import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../TopBar";
import "../switchStyle.css";
import { setDark } from "../../redux";
const Settings = () => {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  const setDarkTheme = () => {
    !dark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    dispatch(setDark());
  };

  return (
    <>
      <TopBar settings={true} bool={true} txt="Settings" />
      <div className='w3-display-middle'>
        <h3>Dark Mode</h3>
        <label class="switch">
          <input type="checkbox" onChange={setDarkTheme} checked={dark} />
          <span class="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default Settings;
