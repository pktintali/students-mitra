import React from "react";

const NoActiveSubUI = (props) => {
  return !props.isSubject ? (
    <>
      <h3>
        <i>Your Active Subject list is Empty</i>
      </h3>
      <h4>
        <b>Steps to follow</b>
      </h4>
      <div className="w3-third">
        <p></p>
      </div>
      <div className="w3-left-align w3-third w3-text-red">
        <p>&#9755; Go To test page and click on single subject</p>
        <p>
          &#9755; Scroll down to all subjects list and click on the star to
          activate the subject
        </p>
        <p>&#9755; Give some test of your active subject</p>
        <p>&#9755; Congrats! Now your progress will start showing here</p>
        <p>
          &#9755; And also you will get recommended questions for your weakest
          subject
        </p>
      </div>
      <div className="w3-third">
        <p></p>
      </div>
    </>
  ) : (
    <>
    <br></br>
      <h3>It Looks Like you haven't given any test</h3>
      <p className="w3-text-red">
        Give some test of your <strong>active subject</strong> in{" "}
        <strong>Single Subject</strong> mode then your progress will display
        here
      </p>
      <i>
        <b>Note: </b>Only Active Subject Progress will show here.
      </i>
    </>
  );
};

export default NoActiveSubUI;
