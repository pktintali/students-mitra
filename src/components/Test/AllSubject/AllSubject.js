import React,{useState} from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";
import { Helmet } from "react-helmet";

function AllSubject(props) {
  const [topbar, setTopBar] = useState(true);
  const hidebar = () => {
    setTopBar(false);
  };

  return (
    <>
      <Helmet>
        <title>Active Subjects Test</title>
        <meta
          name="description"
          content="students-mitra active subjects testpage. Which Contains questions from all your active subjects"
        />
      </Helmet>
      {topbar &&<TopBar txt="Test" click={props.click} bool={true} />}
      {topbar &&<div className="mtop"></div>}
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
