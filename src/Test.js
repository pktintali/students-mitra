import React, { useState } from "react";
import { buyCake, buyCream, setDark } from "./redux/index";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Test = (props) => {
  const ice = useSelector((state) => state.iceCream.noOfCreams);
  const logo = useSelector((state) => state.userLogo.logo);
  const dark = useSelector((state) => state.theme.dark);
  const [c, setC] = useState(1);
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 60 }}>
      <h1>Number of Cakes = {props.numOfCakes}</h1>
      <h1>NO of ICE Creams = {ice}</h1>
      <h1>{dark ? "Dark" : "Light"}</h1>
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={() => dispatch(buyCream(c))}>Add {c} IceCream</button>
      <button onClick={() => dispatch(setDark())}>Change Theme</button>
      <hr></hr>
      {logo && <img style={{ width: "50%" }} src={logo} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
