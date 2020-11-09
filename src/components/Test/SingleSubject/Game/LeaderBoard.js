import React,{useState} from "react";
import firebase from "../../../firebase";
import UsePlayers from "./UsePlayers";
import checkFull from "./CheckFull";

function LeaderBoard(props) {

  const [loading,setLoading] = useState(false)
  var user = firebase.getCurrentUserEmail()
  var id = window.sessionStorage.getItem("id");
  const players = UsePlayers(id);

  async function handleProps() {
    setLoading(true)
    //Deleted in checkFull
    await checkFull(id, "delete",firebase.getCurrentUserEmail());
    setLoading(false)
    //alert(full)
    props.closeAns();
    props.click();
  };

  const loader = (
    <div style={{ display: "block" }} className="w3-modal">
      <div
        style={{ maxWidth: "350px" }}
        className="w3-modal-content w3-padding w3-border w3-border-red w3-animate-zoom w3-padding w3-card-4"
      >
        <div style={{ height: "30px" }}></div>
        <h4>Please Wait...</h4>
        <div style={{ height: "30px" }}></div>
      </div>
    </div>
  );

  return players? (
    <>
    {loading&&loader}
      <div className="w3-third">
        <p></p>
      </div>
      <div className="w3-third">
        <table className="w3-table w3-striped w3-border">
          <tr className="w3-pale-green">
            <th>
              <h2>
                <center>Leaderboard</center>
              </h2>
            </th>
          </tr>

          {players.map((p) => (
            <tr>
              <td className={`${user === p.id? "w3-text-red" : ""}`}>
                <h4>
                  {p.name}
                  {user === p.id && " (You)"}{"  "}
                  <span className='w3-text-blue'><b>{p.marks}</b></span>
                   Points
                </h4>
              </td>
            </tr>
          ))}

        </table>
        <br></br>
        <p></p>
        <div className="w3-panel w3-padding">
          <button
            className="w3-button w3-red"
            onClick={handleProps}
          >
            Close
          </button>
          
        </div>
        
      </div>

      <div className="w3-third">
        <div className="c-box-min"></div>
      </div>
      <div className="c-box-min"></div>
    </>
  ):<h3>Loading...</h3>;
}

export default LeaderBoard;
