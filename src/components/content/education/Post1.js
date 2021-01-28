import React from "react";
import { Helmet } from "react-helmet";

const Post1 = () => {
  return (
    <>
      <Helmet>
        <title>
          AKTU Admit Card 2021 2nd and 3rd Year Download Available | How to
          Download.
        </title>
      </Helmet>
      <header>
        <img
          alt="aktu admit 2021 card logo"
          height={100}
          src="https://aktu.ac.in/images/uptu_logo.png"
        ></img>
        <h1>AKTU Admit Card 2021 2nd and 3rd Year Download Available Soon.</h1>
      </header>
      <section style={{ textAlign: "left", padding: 10 }}>
        <p>
          <strong>AKTU</strong> admit card for all 2nd year and 3rd year
          students will be available soon. Here is how you can download your
          admit card online. To <strong>download</strong> your admit card you
          need only your <strong>Roll No</strong>.
        </p>
        <h3>Steps to Download your admit card</h3>
        <ol>
          <li>
            Visit official admit card website of AKTU{" "}
            <a
              href="https://erp.aktu.ac.in/WebPages/public/examination/PrintAdmitCard.aspx"
              target="_blank"
            >
              Here
            </a>
          </li>
          <li>In the Roll No field enter your Roll No:</li>
          <li>Click on the go button</li>
          <li>Print Your admit card</li>
        </ol>
        <br></br>
        <i className="w3-text-red">
          Note: AKTU admit card will be available soon.
        </i>
      </section>
    </>
  );
};

export default Post1;
