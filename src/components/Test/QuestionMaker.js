import React, {useState,useEffect,useContext} from 'react';
import {NavContext} from '../../App';

function QuestionMaker(props){
const navByContext = useContext(NavContext)

//Skip ans goNext Buttons Functionalaty only difference is that 
//skip goes next without saving ans and goNext goes next by saving ans
const questions = props.data
const [q,setQ] =useState(0)
const [marks,setMarks] = useState(0)
const [count,setCount] = useState(327)
const [totalLength,setTotalLength] = useState();
const [display,setDisplay] = useState('none')
const [notice,setNotice] =useState('block')
const [timeColor,setTimeColor] = useState('green')
const [opt0Color,setOpt0Color] = useState('w3-white')
const [opt1Color,setOpt1Color] = useState('w3-white')
const [opt2Color,setOpt2Color] = useState('w3-white')
const [opt3Color,setOpt3Color] = useState('w3-white')
const [animation,setAnimation] = useState('')
const [userAns,setUserAns] = useState()
const [end,setEnd] = useState(false)
const [answered,setAnswered] = useState(false)

   const clearColor = ()=>{
          setOpt0Color('w3-white')
          setOpt1Color('w3-white')
          setOpt2Color('w3-white')
          setOpt3Color('w3-white')
    }
  
  const closeAnsModal=()=>{
      navByContext(true)
      setDisplay('none')
  }
  
  const closeNoticeModal=()=>{
      navByContext(false)
      setNotice('none')
  }
  const ansmodal = (
 <div style = {{display:display}} className="w3-modal">
    <div className="w3-modal-content w3-border w3-border-red w3-animate-top w3-padding w3-card-4">
        <h4>You Got: {marks} Marks</h4>
        <button onClick = {closeAnsModal}>Close</button>
    </div>
  </div>
);

const noticemodal = (
 <div style = {{display:notice}} className="w3-modal">
    <div className="w3-modal-content w3-animate-top w3-padding w3-card-4">
       
        <ul className = 'w3-ul'>
              <li >  <h2>Notice⚠️</h2></li>
              <li>Don't Refresh this page</li>
              <li>Don't Switch Tabs During Test</li> 
              <li>No Negative Marking</li>
              <li>For a question, answer can be selected only once</li>
              <li>Each Question has its own timer</li>
              <li>If you are unable to solve a question within given time ,it will be automatically skipped</li>   
        </ul>
        <button onClick = {closeNoticeModal}>I Understand, Continue </button>
    </div>
  </div>
);
  
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
        	setCount(327);
            setQ(q+1)
            setTimeColor('green');
            setAnimation('w3-animate-right');
        }
      }
  
    const submit = ()=>{
        setDisplay('block');
    }
 
 useEffect(() => {
    window.scrollTo(0, 0);
if(questions[q].opt0!=null&&questions[q].opt1!=null&&questions[q].opt2!=null&&questions[q].opt3!=null){
setTotalLength(
questions[q].question.length+
questions[q].opt0.length+
questions[q].opt1.length+
questions[q].opt2.length+
questions[q].opt3.length
);
}else{
setTotalLength(3*questions[q].question.length)
 }
}, [q]);
 
useEffect(()=>{
    const interval = setInterval(tick,250)
    return ()=>{
         clearInterval(interval)
    }
 },[count,notice])

   const tick =()=>{
   	  if(notice=='none'){
   	if(count==317||count==321||count==323||count==325){
          setAnimation('');
       }
   	if(count<120){
   	setTimeColor('orange')
        }
        if(count<40){
          setTimeColor('red')
        }
        
   	if(count>0){
   	if(totalLength<100){
     !end&&setCount(count-10)
     }
     else if(totalLength<160){
     !end&&setCount(count-6)
      }
      else if(totalLength<250){
       !end&&setCount(count-4)
     }else{
      !end&&setCount(count-2)
     }
     }
     
     if(count<1){
        if(q===questions.length-1){
         setEnd(true)
       }
        !end&&goNext();
    }
  } }
  
  useEffect(()=>{
    !end&&saveAns(); 
   },[userAns])


return (
<>
   {ansmodal}
   {noticemodal}
    {questions.slice(q,q+1).map(question=>(
    <div>
         <div id = 'top' className = {`${animation} centeredW w3-container`}>
              
               <div className = 'preventSelection w3-display-container w3-center w3-card w3-round w3-padding-large w3-container'>
                 <span className = 'pdr-xxsmall w3-small w3-display-topright'>{parseInt(q)+1}/{questions.length}</span>
                 <h4>{question.question}</h4>
               </div>
               <div className = 'w3-round w3-card' style = {{backgroundColor:timeColor,height:3,width:count}}></div>
                
                <p className = 'preventSelection w3-text-gray'>Select the correct answer</p>
               
               <div className = 'c-box-xmin'></div>
              {/*<p>{totalLength}</p>*/}
                {(question.opt0!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt0):undefined}
                         className = {`preventSelection w3-card w3-round opt w3-padding-large ${opt0Color}`}>{question.opt0}</div>}
                   {(question.opt1!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt1):undefined} 
                         className = {`preventSelection w3-card w3-round opt w3-panel w3-padding-large ${opt1Color}`}>{question.opt1}</div>}
                   
                   {(question.opt2!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt2):undefined} 
                         className = {`preventSelection w3-card w3-round opt w3-padding-large ${opt2Color}`}>{question.opt2}</div>}
                   { (question.opt3!==null)&&<div onClick = {!answered?()=>setUserAns(question.opt3):undefined} 
                        className = {`preventSelection w3-card w3-round opt w3-panel w3-padding-large ${opt3Color}`}>{question.opt3}</div>}
                  
          
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