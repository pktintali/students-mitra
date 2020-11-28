import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";
import QuestionMaker from "./QuestionMaker";

function DataFetching(props) {
  const subject = props.sub;
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //Generating 10 Unique Random No
  var arr = [];
  const get10 = () => {
    while (arr.length < 10) {
      var r = Math.floor(Math.random() * 10);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  };

  useEffect(() => {
    get10();
    const r = props.config
      ? Math.floor(Math.random() * props.config.randLimit)
      : Math.floor(Math.random() * 23);
    if (props.type === "select") {
      for (let i in subject) {
        axios
          .get(
            `https://sheets.googleapis.com/v4/spreadsheets/1nKZxQH1nAVPPhpSLH1tPlYcW31-ZRM9qi7KoGvpLroc/values/${
              subject[i]
            }!A${r + 2}:H${r + 11}?key=AIzaSyBHa8gIZFiDDGmSUKiDPBn6I-aDt6e0IHc`
          )
          .then((res) => {
            for (let i = 0; i < 5; i++) {
              questions.push(...res.data.values.slice(arr[i], arr[i] + 1));
            }
            if (i == subject.length - 1) {
              setIsLoaded(true);
            }
          })
          .catch((error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error);
          });
      }
    } else {
      //Here we are getting 10 random from 10 but we have to get 10 random from 20
      axios
        .get(
          `https://sheets.googleapis.com/v4/spreadsheets/1nKZxQH1nAVPPhpSLH1tPlYcW31-ZRM9qi7KoGvpLroc/values/${subject}!A${
            r + 2
          }:M${r + 11}?key=AIzaSyBHa8gIZFiDDGmSUKiDPBn6I-aDt6e0IHc`
        )
        .then((res) => {
          for (let i = 0; i < 10; i++) {
            res.data.values &&
              questions.push(...res.data.values.slice(arr[i], arr[i] + 1));
          }

          setIsLoaded(true);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        });
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (props.type == "FeaturedLearning") {
    return questions;
  } else if (!isLoaded) {
    return <LoadingScreen />;
  } else {
    if (questions[0] !== undefined) {
      return (
        <QuestionMaker
          game={props.game}
          sub={subject}
          click={props.click}
          data={questions}
          type={props.type}
          leval={props.leval}
          host = {props.host}
        />
      );
    }
    return <LoadingScreen />;
  }
}

export default DataFetching;
