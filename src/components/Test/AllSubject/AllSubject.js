import React,{useState} from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";

function AllSubject(props) {
  const [topbar, setTopBar] = useState(true);
  const hidebar = () => {
    setTopBar(false);
  };

  return (
    <>
      {topbar &&<TopBar txt="Test" click={props.click} bool={true} />}
      {topbar &&<div className="mtop"></div>}
      {topbar &&<h3>
        Contains questions from all your active subjects
        </h3>}
          <SubjectList
          click={props.click}
          hidebar={hidebar}
          id={props.id}
        />
      <div className="mbot"></div>
    </>
  );
}

export default AllSubject;
