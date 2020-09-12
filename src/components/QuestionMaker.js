import React, {useState,useEffect} from 'react';
import '../App.css';

function QuestionMaker(props){
//Skip ans goNext Buttons Functionalaty only difference is that 
//skip goes next without saving ans and goNext goes next by saving ans
const questions = props.data
const [q,setQ] =useState(0)
const [marks,setMarks] = useState(0)
const [count,setCount] = useState(327)
const [timeColor,setTimeColor] = useState('green')
const [opt0Color,setOpt0Color] = useState('w3-white')
const [opt1Color,setOpt1Color] = useState('w3-white')
const [opt2Color,setOpt2Color] = useState('w3-white')
const [opt3Color,setOpt3Color] = useState('w3-white')
//const [subject,setSubject] = useState(props.sub)
const [userAns,setUserAns] = useState()
const [end,setEnd] = useState(false)
const [answered,setAnswered] = useState(false)
//const type = (props.type==='single')?'single':'select';
   
   const clearColor = ()=>{
          setOpt0Color('w3-white')
          setOpt1Color('w3-white')
          setOpt2Color('w3-white')
          setOpt3Color('w3-white')
    }
    
    const manageColor = () =>{
           if(questions[q].ans ===userAns){
            setMarks(marks+1);
           if(userAns===questions[q].opt0){
               setOpt0Color('w3-green')
             }
             if(userAns===questions[q].opt1){
                 setOpt1Color('w3-green')
             }
             if(userAns===questions[q].opt2){
                 setOpt2Color('w3-green')
             }
             if(userAns===questions[q].opt3){
                  setOpt3Color('w3-green')
             }
        }else{
             if(userAns===questions[q].opt0){
               setOpt0Color('w3-red')
             }
             if(userAns===questions[q].opt1){
                 setOpt1Color('w3-red')
             }
             if(userAns===questions[q].opt2){
                 setOpt2Color('w3-red')
             }
             if(userAns===questions[q].opt3){
                  setOpt3Color('w3-red')
             }
             
             
          //Showing Correct Answers
          if(userAns){
             if(questions[q].opt0===questions[q].ans){
                    setOpt0Color('w3-green')
              }
              if(questions[q].opt1===questions[q].ans){
                    setOpt1Color('w3-green')
              }
              if(questions[q].opt2===questions[q].ans){
                    setOpt2Color('w3-green')
              }
              if(questions[q].opt3===questions[q].ans){
                    setOpt3Color('w3-green')
              }
          }
       }
      }   
    
    const  saveAns =()=>{
    	if(userAns){setAnswered(true)}
        manageColor();
        //Marks Setted in manageColors
    	if(q===questions.length-1){
         setEnd(true)
    }
    }
    
    
    
    const goNext = ()=>{
    	clearColor();
    	setAnswered(false)
    	if(q===questions.length-1){
         setEnd(true)
    }
       if(q<questions.length-1){
            setQ(q+1)
            setCount(327);
            setTimeColor('green');
        }
      }
  
    const submit = ()=>{
        alert(marks)
    }
 
 
useEffect(()=>{
    const interval = setInterval(tick,10)
    return ()=>{
         clearInterval(interval)
    }
 },[count])

  
   const tick =()=>{
   	if(count<100){
   	setTimeColor('orange')
        }
        if(count<40){
          setTimeColor('red')
        }
   	if(count>0){
     !end&&setCount(count-1)
     }
     
     if(count===0){
        if(q===questions.length-1){
         setEnd(true)
       }
        !end&&goNext();
        !end&&setCount(327);
        setTimeColor('green');
     }
  } 
  
  useEffect(()=>{
         !end&&saveAns(); 
   },[userAns])
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [q]);


return (
<>
    {questions.slice(q,q+1).map(question=>(
    <div>
         <div id = 'top' className = 'centeredW w3-container'>
              
               <div className = 'w3-display-container w3-center w3-card w3-round w3-padding-large w3-container'>
                 <span className = 'pdr-xxsmall w3-small w3-display-topright'>{parseInt(q)+1}/{questions.length}</span>
                 <h4>{question.question}</h4>
               </div>
               <div className = 'w3-round w3-card' style = {{backgroundColor:timeColor,height:3,width:count}}></div>
                
                <p className = 'w3-text-gray'>Select the correct answer</p>
               
               <div className = 'c-box-xmin'></div>
               
                {(question.opt0!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt0):undefined}
                         className = {`w3-card w3-round opt w3-padding-large ${opt0Color}`}>{question.opt0}</div>}
                   {(question.opt1!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt1):undefined} 
                         className = {`w3-card w3-round opt w3-panel w3-padding-large ${opt1Color}`}>{question.opt1}</div>}
                   
                   {(question.opt2!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt2):undefined} 
                         className = {`w3-card w3-round opt w3-padding-large ${opt2Color}`}>{question.opt2}</div>}
                   { (question.opt3!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt3):undefined} 
                        className = {`w3-card w3-round opt w3-panel w3-padding-large ${opt3Color}`}>{question.opt3}</div>}
                  
          
             <div className = 'c-box-xmin'></div>
           </div>
           <div className = 'c-box-xmin'></div>
       {end&&<button onClick = {submit} className ='w3-border w3-green w3-round w3-button'>Submit</button>}
       {!end&&!answered&&<button onClick = {goNext} className ='w3-border w3-round w3-button'>Skip</button>}
       {!end&&answered&&<button onClick = {goNext} className = 'm-left w3-round w3-button w3-red'>Next</button>}
    </div>
  ))}
</>
);
 
}

export default QuestionMaker;