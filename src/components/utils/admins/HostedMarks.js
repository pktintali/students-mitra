import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import LoadingScreen from "../../LoadingScreen";
const HostedMarks = (props) => {
  const [result, setResult] = useState();
  useEffect(() => {
    firebase.getHostedTestResult(props.sub).then(setResult);
  }, []);

  var i = 1;
  return result ? (
    <table
      style={{
        margin: 10,
        width: "98%",
      }}
      className="w3-table-all w3-card-4"
    >
      <thead>
        <tr className="w3-deep-orange">
          <th>S.N.</th>
          <th>User ID</th>
          <th>Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {/* <h1>{result[user][0]}</h1>; */}
        {Object.keys(result).map((user) => {
          return (
            <tr
              key={user}
              className={`${
                i % 2 === 0 ? "w3-aqua" : "w3-white"
              } w3-hover-blue`}
            >
              <td>{i++}</td>
              <td>{user}</td>
              <td>{result[user][0]}</td>
              <td>{result[user][1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <LoadingScreen />
  );
};

export default HostedMarks;
