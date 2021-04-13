import React from "react";
import Dart from "./Dart";
import ML from "./ML";
import Python from "./Python";

const SubjectPage = (props) => {
  const sub = props.match.params.subject;
  if (sub === "python") {
    return <Python />;
  } else if (sub === "dart") {
    return <Dart />;
  } else if (sub === "machine-learning") {
    return <ML />
  } else {
    return <h1>Coming soon</h1>;
  }
};

export default SubjectPage;
