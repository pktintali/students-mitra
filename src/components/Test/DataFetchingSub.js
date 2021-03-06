import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingSub() {
  const { questions } = [];
  const {sortName} = [];
  const {fullName} = [];
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1sQhy4Ex1XztFzMU3_nvpc-9par8AcIIwsksm9vhlM_E/values/subject?key=AIzaSyBHa8gIZFiDDGmSUKiDPBn6I-aDt6e0IHc`
      )
      .then((res) => {
        questions.push(...res.data.values);
        // console.log(questions)
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    if (questions) {
      for(let i in questions){
          sortName.push(questions[i][2])
          fullName.push(questions[i][1])
      }

      return [sortName,fullName];
    }
    return [];
  }
}

export default DataFetchingSub;
