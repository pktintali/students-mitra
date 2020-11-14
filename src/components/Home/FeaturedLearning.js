import React from "react";
import DataFetching from "../Test/DataFetching";

const FeaturedLearning = (props) => {

  const questions = DataFetching({ sub: props.sub, type: "FeaturedLearning" });

  return (
    <div className="w3-left-align">
      <h1 className="w3-center w3-serif">Recommended Learning</h1>
      <ul className='w3-ul'>
        {questions &&
          questions.map((q) => {
            return (
              <li key={q[0]} className='w3-half'>
               <div className=" w3-hover-pale-yellow w3-round w3-padding w3-container w3-border w3-border-red w3-card-4">
                <h4>
                  <b>Q. </b>
                  {q[1]}
                </h4>
                <h5>
                  <b>Ans -</b>
                  {q[6]}
                </h5>
                {q[7]&&<a style = {{textDecoration:'none'}} target="blank" href={q[7]}>
                  <span style={{fontSize:18}} className='w3-btn w3-round w3-padding-small w3-border w3-border-green w3-hover-white'>
                  Learn in Detail ↗
                  </span>
                </a>}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FeaturedLearning;
