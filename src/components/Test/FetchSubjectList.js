import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchSubjectList = () => {
  const [subList, setSubList] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      axios
        .get(
          `https://sheets.googleapis.com/v4/spreadsheets/1sQhy4Ex1XztFzMU3_nvpc-9par8AcIIwsksm9vhlM_E/values/subject?key=AIzaSyBHa8gIZFiDDGmSUKiDPBn6I-aDt6e0IHc`
        )
        .then((res) => {
          setSubList(res.data.values);
          //setIsLoaded(true);
          // console.log(subList);
        })
        .catch((error) => {
          // setIsLoaded(true);
          setError(error);
          alert(error);
          console.log(error);
        });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return subList;
};

export default FetchSubjectList;
