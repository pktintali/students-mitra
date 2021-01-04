import React from "react";
import Dart from "./Dart";
import Python from "./Python";

const SubjectPage = (props) => {
  const sub = props.match.params.subject;
  if (sub === "python") {
    return <Python />;
  } else if (sub === "dart") {
    return <Dart />;
  } else {
    return <h1>Coming soon</h1>;
  }
};

export default SubjectPage;
