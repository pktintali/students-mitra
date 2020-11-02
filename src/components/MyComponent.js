import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  var i = 1;
  useEffect(() => {
    fetch("https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/da")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  } else {
    return (
      <div>
        {items.map((item) => (
          <div>
            <div className="w3-white w3-left-align w3-card w3-container">
              <h4>
                {i++}. {item.question}
              </h4>
              <input
                class="w3-radio"
                type="radio"
                name={`'opt'+${i}`}
                value=""
              />
              <label>
                {" "}
                {item.opt0}
                <br />
              </label>
              <input
                class="w3-radio"
                type="radio"
                name={`'opt'+${i}`}
                value=""
              />
              <label>
                {" "}
                {item.opt1}
                <br />
              </label>
              <input
                class="w3-radio"
                type="radio"
                name={`'opt'+${i}`}
                value=""
              />
              <label>
                {" "}
                {item.opt2} <br />
              </label>
              <input
                class="w3-radio"
                type="radio"
                name={`'opt'+${i}`}
                value=""
              />
              <label> {item.opt3}</label>
              <p />
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default MyComponent;
