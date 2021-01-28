import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <div className="w3-container w3-third">
      <Link to={"/blogs/" + props.url} className="no-td">
        <div className=" pointer w3-padding-small w3-hover-green w3-border w3-round-large">
          <h3>
            <strong>{props.title}</strong>
          </h3>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
