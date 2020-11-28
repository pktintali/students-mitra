import React,{useState} from "react";
import { buyCake, buyCream } from "./redux/index";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Test = (props) => {
  const ice = useSelector((state) => state.iceCream.noOfCreams);
  const [c, setC] = useState(1);
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 60 }}>
      <h1>Number of Cakes = {props.numOfCakes}</h1>
      <h1>Number of IceCreams = {ice}</h1>
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={() => dispatch(buyCream(c))}>Buy {c} IceCream</button>
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
