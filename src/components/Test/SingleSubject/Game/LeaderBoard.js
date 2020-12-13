import React, { useState } from "react";
import firebase from "../../../firebase";
import UsePlayers from "./UsePlayers";
import checkFull from "./CheckFull";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function LeaderBoard(props) {
  const dark = useSelector((state) => state.theme.dark);
  const [loading, setLoading] = useState(false);
  var user = firebase.getCurrentUserEmail();
  var id = window.sessionStorage.getItem("id");
  const players = UsePlayers(id);

  async function handleProps() {
    setLoading(true);
    //Deleted in checkFull
    if (props.host) {
      await checkFull(id, "delete");
    } else {
      console.log("Not Host");
    }
    setLoading(false);
    //alert(full)
    props.closeAns();
    props.click();
  }

  const loader = (
    <div style={{ display: "block" }} className="w3-modal">
      <div
        style={{ maxWidth: "350px" }}
        className={`w3-modal-content w3-padding w3-border ${
          dark ? "w3-dark-gray" : ""
        } ${
          dark ? "w3-border-brown" : "w3-border-red"
        } w3-animate-zoom w3-padding w3-card-4`}
      >
        <div style={{ height: "30px" }}></div>
        <h4>Please Wait...</h4>
        <div style={{ height: "30px" }}></div>
      </div>
    </div>
  );

  return players ? (
    <>
      <Helmet>
        <title>LeaderBoard</title>
        <meta
          name="description"
          content="studentmitra game leaderboard. View your and your friends game score here."
        />
      </Helmet>
      {loading && loader}
      <div className="w3-third">
        <p></p>
      </div>
      <div className="w3-third">
        <h2 className={`w3-border ${dark ? "w3-brown" : "w3-pale-yellow"}`}>
          <center>Scoreboard</center>
        </h2>
        <table className="w3-table w3-card w3-striped w3-border">
          <tbody>
            <tr className={`${dark ? "w3-dark-gray" : "w3-pale-green"}`}>
              <th>
                <h4>
                  <b>Player</b>
                </h4>
              </th>
              <th>
                <h4>
                  <b>Score</b>
                </h4>
              </th>
            </tr>

            {players.map((p) => (
              <tr className={`${dark ? "w3-blue-gray" : ""}`}>
                <td
                  className={`${
                    user === p.id ? (dark ? "w3-text-aqua" : "w3-text-red") : ""
                  }`}
                >
                  <h4>
                    {p.name}
                    {user === p.id && " (You)"}
                  </h4>
                </td>
                <td>
                  <span
                    className={`${
                      user === p.id
                        ? dark
                          ? "w3-text-aqua"
                          : "w3-text-blue"
                        : ""
                    }`}
                  >
                    <h3>{p.marks}</h3>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <p></p>
        <div className="w3-panel w3-padding">
          <button className="w3-button w3-red w3-round" onClick={handleProps}>
            Close
          </button>
        </div>
      </div>

      <div className="w3-third"></div>
    </>
  ) : (
    <h3>Loading...</h3>
  );
}

export default LeaderBoard;
