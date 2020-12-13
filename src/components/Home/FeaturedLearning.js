import React, { useState, useEffect } from "react";
import getDevice from "../utils/getDevice";
import DataFetching from "../Test/DataFetching";
import SuggestionCard from "./SuggestionCard";
import LoadingScreen from "../LoadingScreen";

const FeaturedLearning = (props) => {
  const questions = DataFetching({ sub: props.sub, type: "FeaturedLearning" });
  return questions && questions.length > 0 ? (
    <div className="w3-left-align">
      <h1 className="w3-center w3-serif">
        {props.noAuth ? "Featured Learning" : "Recommended Learning"}
      </h1>
      {props.noAuth && (
        <p className="w3-text-red w3-center">
          <i>
            ⚠️These are only random questions Signin for getting Recommended
            Learning based on your progress
          </i>
        </p>
      )}
      {getDevice() == "PC" && (
        <ul className="w3-ul">
          {questions &&
            questions.map((q) => {
              var r = Math.floor(Math.random() * (12 - 8) + 8);
              return (
                <li key={q[0]} className="w3-half">
                  <SuggestionCard
                    video={q[r] ? q[r] : false}
                    mini={false}
                    question={q[1]}
                    ans={q[6]}
                    reference={q[7]}
                  />
                </li>
              );
            })}
        </ul>
      )}
      {getDevice() != "PC" && (
        <ul className="w3-ul">
          {questions &&
            questions.map((q) => {
              const r = Math.floor(Math.random() * (12 - 8) + 8);
              return (
                <li key={q[0]} className="w3-half">
                  <SuggestionCard
                    video={q[r] ? q[r] : false}
                    mini={true}
                    question={q[1]}
                    ans={q[6]}
                    reference={q[7]}
                  />
                </li>
              );
            })}
        </ul>
      )}
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default FeaturedLearning;
