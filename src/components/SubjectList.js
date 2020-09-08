import React,{useState,useContext} from 'react';
import '../App.css';
import DataFetching from './DataFetching';
import Questions1 from  './SingleSubject/Questions1';
import Questions2 from  './SelectSubject/Questions2';
import Questions3 from  './AllSubject/Questions3';
import './SingleSubject/style.css';

export const SubjectContext = React.createContext()
function SubjectList(props) {
	
	const [sel,setSel] = useState(true)
	const [disabled,enable]=useState('w3-disabled')
	 const [sub,setSub] = useState([])
	const [selCard1,setSelCard1]=useState('w3-white')
	const [selCard2,setSelCard2]=useState('w3-white')
	const [selCard3,setSelCard3]=useState('w3-white')
	const [selCard4,setSelCard4]=useState('w3-white')
	const [selCard5,setSelCard5]=useState('w3-white')
	const [selCard6,setSelCard6]=useState('w3-white')

	const back=()=>{
     setSel(true)
    }
    
	function resetOthers(i){
		if(i===1){
          setSelCard2('w3-white')
          setSelCard3('w3-white')
          setSelCard4('w3-white')
          setSelCard5('w3-white')
          setSelCard6('w3-white')
      }
      
      if(i===2){
          setSelCard1('w3-white')
          setSelCard3('w3-white')
          setSelCard4('w3-white')
          setSelCard5('w3-white')
          setSelCard6('w3-white')
      }
      
      if(i===3){
          setSelCard2('w3-white')
          setSelCard1('w3-white')
          setSelCard4('w3-white')
          setSelCard5('w3-white')
          setSelCard6('w3-white')
      }
      if(i===4){
          setSelCard2('w3-white')
          setSelCard3('w3-white')
          setSelCard1('w3-white')
          setSelCard5('w3-white')
          setSelCard6('w3-white')
      }
      if(i===5){
          setSelCard2('w3-white')
          setSelCard3('w3-white')
          setSelCard4('w3-white')
          setSelCard1('w3-white')
          setSelCard6('w3-white')
      }
      if(i===6){
          setSelCard2('w3-white')
          setSelCard3('w3-white')
          setSelCard4('w3-white')
          setSelCard5('w3-white')
          setSelCard1('w3-white')
      }
      
    }
	
	const startQuiz1= ()=>{
		sub.push('dbms')
		setSelCard1('w3-red')
		enable('')
     if(props.id===1) {
      setSub(['dbms'])
      resetOthers(1)
      }
   }
   
   const startQuiz2= ()=>{
   	sub.push('daa')
   	setSelCard2('w3-red')
		enable('')
   	if(props.id===1) { 
      setSub(['daa'])
      resetOthers(2)
      }
   }
   
   const startQuiz3= ()=>{
   	sub.push('cd')
   	setSelCard3('w3-red')
		enable('')
   	if(props.id===1) { 
      setSub(['cd'])
      resetOthers(3)
      }
   }
   
   const startQuiz4= ()=>{
   	sub.push('ml')
   	setSelCard4('w3-red')
		enable('')
   	if(props.id===1) {  
      setSub(['ml'])
      resetOthers(4)
      }
   }
   
   const startQuiz5= ()=>{
   	sub.push('da')
   	setSelCard5('w3-red')
		enable('')
   	if(props.id===1) {
      setSub(['da'])
      resetOthers(5)
      }
   }
   
   const startQuiz6= ()=>{
   	sub.push('coi')
   	setSelCard6('w3-red')
		enable('')
   	if(props.id===1) {  
      setSub(['coi'])
      resetOthers(6)
      }
   }
   
   const startQuiz7= ()=>{
   	if(props.id===1) {     
      setSub([''])
      }
   }
   
   const startQuiz=()=>{
      if(!disabled){
          setSel(false)
          props.hidebar()
         props.fullWidth()
      }
   }
   
   
   if(sel){
  return (
    <div> 
          <h2 className = 'w3-text-grey' > {props.text}</h2>
        <ul className = 'w3-ul'>
                   <li onClick = {startQuiz1} className = {`w3-block w3-btn ${selCard1}`}>DBMS</li>
                  <li onClick = {startQuiz2} className = {`w3-block w3-btn ${selCard2}`}>DAA</li>
                  <li onClick = {startQuiz3} className = {`w3-block w3-btn ${selCard3}`}>DC</li>
                  <li onClick = {startQuiz4} className = {`w3-block w3-btn ${selCard4}`}>ML</li>
                  <li onClick = {startQuiz5} className = {`w3-block w3-btn ${selCard5}`}>DA</li>
                  <li onClick = {startQuiz6} className = {`w3-block w3-btn ${selCard6}`}>COI</li>
           </ul> 
           <br/><br/>
           <button onClick = {startQuiz} className = {` w3-large w3-round w3-red w3-button ${disabled} `}>Start</button>
    </div>
  );
  }
  else{
      return (
       <SubjectContext.Provider value = {sub}>
       {props.id==1&&  <Questions1 /> }
       {props.id==2&&<Questions2  />}
      {/* {props.id ==3&&<Questions3 />}*/}
       </SubjectContext.Provider>
       );
    }
}

export default SubjectList;
