import React from 'react';
function ResultPage(props) {

const questions = props.qData

const handleProps=()=>{
props.closeAns()
props.click()
}

  return (
     <>
         {questions.map(q=>(
           <div className = 'w3-container'>
           <div className = 'w3-card'>
                <h3>{q.id}</h3>
                <p>{q.question}</p>
                <a href = {q.references} target = 'blank'>Learn More...</a>
             </div>
             <br></br>
           </div>
        ))}
         <button onClick = {handleProps} >Close</button>
     </>
  );
}

export default ResultPage;
