import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "../TopBar";

import SubjectCard from "./utils/SubjectCard";

const Learning = () => {
  return (
    <>
      <Helmet>
        <title>StudentMitra Online Learning</title>
        <meta
          name="description"
          content="StudentMitra learning is free to learn anything"
        />
      </Helmet>
      <TopBar notify={true} bool={true} txt={"Learn on StudentMitra"} />
      <h1>Welcome to StudentMitra Learning</h1>
      <p>Learn in brief and with example</p>
      <SubjectCard sub={"python"} />
      <SubjectCard sub = {"machine-learning"}/>
      <SubjectCard sub={"dart"} />
      <SubjectCard sub={"javascript"} />
    </>
  );
};

export default Learning;
