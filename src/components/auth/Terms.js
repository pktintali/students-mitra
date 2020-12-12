import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "../TopBar";
const Terms = () => {
  return (
    <>
      <Helmet>
        <title>StudentMitra Terms of Use</title>
        <meta
          name="description"
          content="StudentMitra Terms of uses"
        />
      </Helmet>
      <TopBar bool={true} settings={true} txt={"Terms and Conditions"} />
      <div
        style={{
          textAlign: "left",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: "-10px",
        }}
      >
        <h3>Introduction</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          This application has been developed and published by TDevelopers
          India. “TDevelopers” or “we” or “us” refer to TDevelopers India and
          the TDevelopers Corporate Family in our terms and conditions. The
          TDevelopers corporate family means its owner, employees, consultants
          and its subsidiaries.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          This terms and conditions applies whenever you signup, login, use or
          interact with our application and services.{" "}
        </p>
        <ul>
          <li>Verified Users</li>
          <li>Need of Verification</li>
          <li>Prohibited Activities</li>
          <li>Account Termination </li>
        </ul>
        <hr></hr>
        <h3>1. Verified users and need of verification </h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          <b>a. Verified Users</b>
          <br></br>
          People who have signed up on our site have to verify their account for
          safety purpose for which they will receive a link on their provided
          email id and by clicking on the link their account will be verified.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          <b>b. Need of Verification</b>
          <br></br>
          People who have signed up on our site and want to ask doubts/queries
          or post any educational article needs verification and without the
          verification they cannot post anything and any fake ids can be
          terminated by the owners of the site.
        </p>
        <h3>2. Prohibited Activity and Account Termination</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          <b>a. Prohibited Activity</b>
          <br></br>
          The people cannot post any unacceptable, unreasonable or offensive
          post in the Explore page to maintain the dignity of others using this
          site. Any type of misbehavior will not be tolerated and strict actions
          may be taken against the person doing so.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          <b>b. Account Termination </b>
          <br></br>
          Person posting any type of nuisance will be suffering their account to
          be suspended or terminated for days weeks or even months depending
          upon the how inappropriate the post is. If the post is above the level
          of tolerance of the owners of the site, the person may even face
          his/her account to be deleted.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          As mentioned in our Privacy policy your account details are safe in
          our database so we hope you accept our Terms and Conditions.
        </p>
        <hr></hr>
        <h3>What if there are changes/updates in Terms and Conditions?</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          We may update this Terms and Conditions as necessary to reflect
          changes we make and to satisfy legal requirements. We will post a
          prominent notice of material changes on our website. We will provide
          you with other appropriate notice of important changes at least 30
          days before the effective date.{" "}
        </p>
        <div className="w3-yellow w3-panel w3-center">
          <p style={{ fontFamily: "Georgia, serif" }}>
            CONTACT US If you have any questions, comments, or concerns
            regarding this Terms and Conditions, please contact TDevelopers at:
            <br></br>
            <span style={{ fontSize: 20 }} className="w3-text-red">
              <a className="no-td" href="mailto:tdeveloperindia@gmail.com">
                tdeveloperindia@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
