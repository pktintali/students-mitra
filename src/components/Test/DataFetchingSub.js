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
      )
      .then((res) => {
        questions.push(...res.data.values);
        console.log(questions)
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
