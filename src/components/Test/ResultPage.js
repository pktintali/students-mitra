import React from "react";
import { Doughnut } from "react-chartjs-2";

function ResultPage(props) {
  const questions = props.qData;
  const userAnswers = props.userAns;
  const tOrNot = [];
  var c = 0;
  var ic = 0;
  var na = 0;
  var to = 0;

  for (let q in userAnswers) {
    //alert(userAnswers[q])
    if (questions[q].ans === userAnswers[q]) {
      c++;
    } else if (userAnswers[q] === " ") {
      na++;
    } else if (userAnswers[q] == "timeout") {
      to++;
    } else {
      ic++;
    }
  }

  const ansData = {
    labels: ["Correct", "Incorrect", "Time Out", "Not Attempted"],
    datasets: [
      {
        data: [c, ic, to, na],
        backgroundColor: ["#32CD32", "#d10a0a", "#FFD700", "#00BFFF"],
        hoverBackgroundColor: ["#32EE32", "#ff3030", "#FFFF00", "#00FFFF"],
      },
    ],
  };

  const handleProps = () => {
    props.closeAns();
    props.click();
  };
  var i = 0;
  var j = 0;

  for (let i in questions) {
    if (questions[i].ans === userAnswers[i]) {
      tOrNot.push("correct");
    } else if (userAnswers[i] === " ") {
      tOrNot.push("skip");
    } else if (userAnswers[i] === "timeout") {
      tOrNot.push("timeout");
    } else {
      tOrNot.push("incorrect");
    }
  }

  return (
    <>
      <Doughnut
        data={ansData}
        width={100}
        height={60}
        options={{
          maintainAspectRatio: true,
        }}
      />
      <br></br>
      {questions.map((q) => (
        <div className="w3-container">
          <div
            className={`w3-padding w3-card ${
              tOrNot[j] === "correct" && "w3-pale-green"
            } ${tOrNot[j] === "incorrect" && "w3-pale-red"} ${
              tOrNot[j] === "skip" && "w3-pale-blue"
            } ${tOrNot[j] === "timeout" && "w3-pale-yellow"} `}
          >
            <h4 className="w3-left-align">
              <b>{++i}- </b>
              {q.question}
            </h4>
            {tOrNot[j] === "skip" && (
              <h5 className="w3-left-align">
                <b>Not Attempted</b>
              </h5>
            )}
            {tOrNot[j] === "timeout" && (
              <h5 className="w3-left-align">
                <b>TimeOut</b>
              </h5>
            )}
            {tOrNot[j] === "incorrect" && (
              <p className="w3-left-align">
                <b>You Selected - </b>
                {userAnswers[j]}
              </p>
            )}
            <h5 className="w3-left-align">
              <b>Correct Ans - </b>
              {q.ans}
            </h5>
            {q.references && (
              <a
                className="w3-text-blue w3-btn"
                href={q.references}
                target="blank"
              >
                Learn more about this topic. 📋
              </a>
            )}
          </div>
          <br></br>
          <span className="w3-hide">{j++}</span>
        </div>
      ))}
      <button className="w3-button w3-red" onClick={handleProps}>
        Close
      </button>
    </>
  );
}

export default ResultPage;
