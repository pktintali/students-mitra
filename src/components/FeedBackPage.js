import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "./TopBar";

const FeedBackPage = () => {
  return (
    <>
      <Helmet>
        <title>Send Feedback/ Ask Questions</title>
        <meta
          name="description"
          content="student-mitra feedback form page. studentmitra is online subject knowledge testing platform."
        />
      </Helmet>
      <TopBar bool={true} profile={true} txt="Send feedback" />
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfpA1FcExK-v9SSloWjwzT1xnH07OJf1lE0wAOlp0VzmIsXzQ/viewform?embedded=true"
          width="100%"
          height="1226"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <button
        onClick={() => window.history.back()}
        className="w3-button w3-red"
      >
        Back
      </button>
    </>
  );
};

export default FeedBackPage;
