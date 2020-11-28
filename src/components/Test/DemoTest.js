import React from "react";
import TopBar from "../TopBar";
import DataFetching from "./DataFetching";

const DemoTest = (props) => {
  return (
    <div>
      <div style={{ marginTop: 60 }}>
      <TopBar bool={false} txt="Demo Test" />
        <DataFetching click={props.click} type={"demo"} sub={"wd"} />
      </div>
    </div>
  );
};

export default DemoTest;
