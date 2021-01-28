import React from "react";
import Post1 from "./education/Post1";
import PostURLs from "./postURLs";
import DTF from "./tech/flutter/Dart_Theme_Tutorial";
const PostHandler = (props) => {
  const topic = props.match.params.topic;
  switch (topic) {
    case PostURLs.aktuAdmitCard:
      return <Post1 />;
    case PostURLs.flutterDarkTheme:
      return <DTF />;
    default:
      return <h1>Something is Not Here Return to Home Page</h1>;
  }
};

export default PostHandler;
