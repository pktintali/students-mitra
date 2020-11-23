import React, { useState, useEffect, useContext } from "react";
import { NavContext } from "../../App";
import ResultPage from "./ResultPage";
import SaveResult from "./SaveResult";
import LeaderBoard from "./SingleSubject/Game/LeaderBoard";
import AddRoom from "./SingleSubject/Game/AddRoom";
import firebase from "../firebase";
import { Helmet } from "react-helmet";

function QuestionMaker(props) {
  const navByContext = useContext(NavContext);

  var id = window.sessionStorage.getItem("id");
  //Skip ans goNext Buttons Functionalaty only difference is that
  //skip goes next without saving ans and goNext goes next by saving ans
  const questions = props.data;
  const [q, setQ] = useState(0);
  const [marks, setMarks] = useState(0);
  const [count, setCount] = useState(654);
  const [totalLength, setTotalLength] = useState();
  const [display, setDisplay] = useState("none");
  const [notice, setNotice] = useState("block");
  const [timeColor, setTimeColor] = useState("green");
  const [opt0Color, setOpt0Color] = useState("w3-white");
  const [opt1Color, setOpt1Color] = useState("w3-white");
  const [opt2Color, setOpt2Color] = useState("w3-white");
  const [opt3Color, setOpt3Color] = useState("w3-white");
  const [animation, setAnimation] = useState("");
  const [userAns, setUserAns] = useState();
  const [end, setEnd] = useState(false);
  const [review, setReview] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [allUserAns, setAllUserAns] = useState([]);
  const [loader, setLoader] = useState(false);
  var [timeout, setTimeOut] = useState(false);
  const clearColor = () => {
    setOpt0Color("w3-white");
    setOpt1Color("w3-white");
    setOpt2Color("w3-white");
    setOpt3Color("w3-white");
  };

  const closeAnsModal = () => {
    props.click();
    navByContext(true);
    setDisplay("none");
  };

  const closeNoticeModal = () => {
    navByContext(false);
    setNotice("none");
  };

  const toogleReview = () => {
    review == true ? setReview(false) : setReview(true);
  };

  const submitWaitModal = (
    <div style={{ display: "block", zIndex: 999999 }} className="w3-modal">
      <div
        style={{ maxWidth: "350px" }}
        className="w3-modal-content w3-padding w3-border w3-border-red w3-animate-zoom w3-padding w3-card-4"
      >
        <div style={{ height: "30px" }}></div>
        <h4>Submitting Your Answers...</h4>
        <div style={{ height: "30px" }}></div>
      </div>
    </div>
  );

  const ansmodal = (
    <div style={{ display: display, zIndex: 9999999 }} className="w3-modal">
      <div
        style={{ maxWidth: "500px" }}
        className="w3-modal-content w3-padding-large w3-border w3-border-red w3-animate-top w3-padding w3-card-4"
      >
        <h4>Marks Obtained : {marks}</h4>
        <div className="w3-bar">
          {!props.game && (
            <button
              className="w3-left w3-button w3-red"
              onClick={closeAnsModal}
            >
              Close
            </button>
          )}
          <button
            className={`${props.game ? "" : "w3-right"} w3-button w3-green`}
            onClick={toogleReview}
          >
            {props.game ? "View Leaderboard" : "Review"}
          </button>
        </div>
      </div>
    </div>
  );
  const noticemodal = (
    <div style={{ display: notice, zIndex: 9999999 }} className="w3-modal">
      <div
        style={{ maxWidth: 350 }}
        className="w3-border w3-border-red w3-modal-content w3-animate-top w3-padding w3-card-4"
      >
        <ul className="w3-ul">
          <li>
            {" "}
            <h2>Notice⚠️</h2>
          </li>
          <li>Don't Refresh this page</li>
          <li>Don't Switch Tabs During Test</li>
          <li>No Negative Marking</li>
          <li>For a question, answer can be selected only once</li>
          <li>Each Question has its own timer</li>
          <li>
            If you are unable to solve a question within given time ,it will be
            automatically skipped
          </li>
        </ul>
        <button
          className="w3-card w3-button w3-border w3-pale-green w3-small"
          onClick={closeNoticeModal}
        >
          I Understand, Continue{" "}
        </button>
      </div>
    </div>
  );

  const manageColor = () => {
    if (questions[q][6] === userAns) {
      setMarks(marks + 1);
      if (userAns === questions[q][2]) {
        setOpt0Color("w3-green");
      }
      if (userAns === questions[q][3]) {
        setOpt1Color("w3-green");
      }
      if (userAns === questions[q][4]) {
        setOpt2Color("w3-green");
      }
      if (userAns === questions[q][5]) {
        setOpt3Color("w3-green");
      }
    } else {
      if (userAns === questions[q][2]) {
        setOpt0Color("w3-red");
      }
      if (userAns === questions[q][3]) {
        setOpt1Color("w3-red");
      }
      if (userAns === questions[q][4]) {
        setOpt2Color("w3-red");
      }
      if (userAns === questions[q][5]) {
        setOpt3Color("w3-red");
      }

      //Showing Correct Answers
      if (userAns) {
        if (questions[q][2] === questions[q][6]) {
          setOpt0Color("w3-green");
        }
        if (questions[q][3] === questions[q][6]) {
          setOpt1Color("w3-green");
        }
        if (questions[q][4] === questions[q][6]) {
          setOpt2Color("w3-green");
        }
        if (questions[q][5] === questions[q][6]) {
          setOpt3Color("w3-green");
        }
      }
    }
  };

  const saveAns = () => {
    if (userAns) {
      setAnswered(true);
    }
    manageColor();
    //Marks Setted in manageColors
    if (q === questions.length - 1) {
      setEnd(true);
    }
  };

  const skip = () => {
    setUserAns(" ");
    goNext();
  };
  const goNext = () => {
    clearColor();
    setAnswered(false);
    if (q === questions.length - 1) {
      setEnd(true);
    }
    if (q < questions.length - 1) {
      setCount(654);
      setTimeOut(false);
      setTimeColor("green");
      setAnimation("w3-animate-right");
      setQ(q + 1);
    }
  };

  async function submit() {
    setLoader(true);
    !props.game &&
      SaveResult({ mark: marks, sub: props.sub, type: props.type });
    props.game &&
      (await AddRoom(id, firebase.getCurrentUserEmail(), "marks", marks));
    //!timeout&&userAns!=undefined&&alert(userAns)
    !timeout && userAns != undefined && allUserAns.push(userAns);
    setLoader(false);
    window.scrollTo(0, 0);
    setDisplay("block");
  }

  useEffect(() => {
    // !timeout&&userAns!=undefined&&alert(userAns)
    !timeout && userAns != undefined && allUserAns.push(userAns);
    window.scrollTo(0, 0);
    if (
      questions[q][2] != null &&
      questions[q][3] != null &&
      questions[q][4] != null &&
      questions[q][5] != null
    ) {
      setTotalLength(
        questions[q][1].length +
          questions[q][2].length +
          questions[q][3].length +
          questions[q][4].length +
          questions[q][5].length
      );
    } else {
      setTotalLength(3 * questions[q][1].length);
    }
  }, [q]);

  useEffect(() => {
    const interval = setInterval(tick, 100); //100
    return () => {
      clearInterval(interval);
    };
  }, [count, notice]);

  const tick = () => {
    if (notice == "none") {
      if (
        count == 645 ||
        count == 642 ||
        count == 644 ||
        count == 648 ||
        count == 649 ||
        count == 650 ||
        count == 651 ||
        count == 652 ||
        count == 653
      ) {
        setAnimation("");
      }
      if (count < 240) {
        setTimeColor("orange");
      }
      if (count < 110) {
        setTimeColor("red");
      }

      if (count > 0) {
        if (props.game) {
          switch (props.leval) {
            case "Easy": {
              if (totalLength < 100) {
                !end && setCount(count - 4);
              } else if (totalLength < 160) {
                !end && setCount(count - 3);
              } else if (totalLength < 250) {
                !end && setCount(count - 2);
              } else {
                !end && setCount(count - 1);
              }
              break;
            }
            case "Hard": {
              if (totalLength < 100) {
                !end && setCount(count - 12);
              } else if (totalLength < 160) {
                !end && setCount(count - 10);
              } else if (totalLength < 250) {
                !end && setCount(count - 6);
              } else {
                !end && setCount(count - 4);
              }
              break;
            }
            default: {
              if (totalLength < 100) {
                !end && setCount(count - 6);
              } else if (totalLength < 160) {
                !end && setCount(count - 5);
              } else if (totalLength < 250) {
                !end && setCount(count - 3);
              } else {
                !end && setCount(count - 2);
              }
            }
          }
        } else {
          if (totalLength < 100) {
            !end && setCount(count - 6);
          } else if (totalLength < 160) {
            !end && setCount(count - 5);
          } else if (totalLength < 250) {
            !end && setCount(count - 3);
          } else {
            !end && setCount(count - 2);
          }
        }
      }

      if (count < 1) {
        //count>-10&&!answered&&alert('timeout')
        count > -12 && !answered && allUserAns.push("timeout");
        count > -12 && !answered && setTimeOut(true);
        if (q === questions.length - 1) {
          setEnd(true);
          setCount(-12);
        }
        !end && goNext();
      }
    }
  };

  useEffect(() => {
    userAns != " " && !end && saveAns();
  }, [userAns]);

  if (!review) {
    return (
      <>
        {ansmodal}
        {loader && submitWaitModal}
        {noticemodal}
        {questions.slice(q, q + 1).map((question) => (
          <div>
            <Helmet>
        <title>{question[1]}</title>
              <meta
                name="description"
                content={question[1]+','+question[2]+','+question[3]+','+question[4]+','+question[5]}
              />
            </Helmet>
            <div
              style={{ maxWidth: "355px" }}
              id="top"
              className={`${animation} w3-container`}
            >
              <div className="preventSelection w3-display-container w3-center w3-card w3-round w3-padding-large w3-container">
                <span className="pdr-xxsmall w3-small w3-display-topright">
                  {parseInt(q) + 1}/{questions.length}
                </span>
                <h4>{question[1]}</h4>
              </div>
              <div
                className="w3-round w3-card"
                style={{
                  backgroundColor: timeColor,
                  height: 3,
                  width: count / 2,
                }}
              ></div>

              <p className="preventSelection w3-text-gray">
                Select the correct answer
              </p>

              <div className="c-box-xmin"></div>
              {/*<p>{totalLength}</p>*/}
              {question[2] && (
                <div
                  onClick={
                    !answered ? () => setUserAns(question[2]) : undefined
                  }
                  className={`pointer preventSelection w3-card w3-round opt w3-padding-large ${opt0Color}`}
                >
                  {question[2]}
                </div>
              )}
              {question[3] && (
                <div
                  onClick={
                    !answered ? () => setUserAns(question[3]) : undefined
                  }
                  className={`pointer preventSelection w3-card w3-round opt w3-panel w3-padding-large ${opt1Color}`}
                >
                  {question[3]}
                </div>
              )}

              {question[4] && (
                <div
                  onClick={
                    !answered ? () => setUserAns(question[4]) : undefined
                  }
                  className={`pointer preventSelection w3-card w3-round opt w3-padding-large ${opt2Color}`}
                >
                  {question[4]}
                </div>
              )}
              {question[5] && (
                <div
                  onClick={
                    !answered ? () => setUserAns(question[5]) : undefined
                  }
                  className={`pointer preventSelection w3-card w3-round opt w3-panel w3-padding-large ${opt3Color}`}
                >
                  {question[5]}
                </div>
              )}

              <div className="c-box-xmin"></div>
            </div>
            <div className="c-box-xmin"></div>

            {end && (
              <button
                onClick={submit}
                className="w3-border w3-green w3-round w3-button"
              >
                Submit
              </button>
            )}
            {!end && !answered && (
              <button onClick={skip} className="w3-border w3-round w3-button">
                Skip
              </button>
            )}
            {!end && answered && (
              <button
                onClick={goNext}
                className="m-left w3-round w3-button w3-red"
              >
                Next
              </button>
            )}
          </div>
        ))}
      </>
    );
  } else {
    if (!props.game) {
      return (
        <ResultPage
          userAns={allUserAns}
          closeAns={closeAnsModal}
          qData={questions}
          click={props.click}
        />
      );
    } else {
      return (
        <LeaderBoard
          host={props.host}
          closeAns={closeAnsModal}
          click={props.click}
        />
      );
    }
  }
}

export default QuestionMaker;
