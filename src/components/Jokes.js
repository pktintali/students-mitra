import React, { useState, useEffect } from "react";
import LoadingScreen from './LoadingScreen';

function Jokes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>
                  <LoadingScreen />
             </div>;
  } else {
    return (
      <div>
       {items.map(item => (
       <div>
           <div className = 'w3-light-grey w3-left-align w3-card w3-container'>
               <h4>{item.setup}</h4>
               ..
               <h4>{item.punchline}</h4>
               <p>😂🤣</p>
               <p/>
           </div>
           <br />
           </div>
        ))}
      </div>
    );
  }
}

export default Jokes