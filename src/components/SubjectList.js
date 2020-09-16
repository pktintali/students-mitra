import React,{useState} from 'react';
import Questions1 from  './SingleSubject/Questions1';
import Questions2 from  './SelectSubject/Questions2';
import SubjectCard from './SubjectCard';
import './SingleSubject/style.css';

export const SubjectContext = React.createContext()

function SubjectList(props) {
	
	const [sub,setSub] = useState([])
	const [sel,setSel] = useState(true)
	const [single,setSingle] = useState(false)
	const [select,setSelect] = useState(false)
	const [disabled,enable]=useState('w3-disabled')

	const back=()=>{
     setSel(true)
    }
   
   const startQuiz=()=>{
      if(!disabled){
          setSel(false)
          props.hidebar()
      }
   }

   if(sel){
  return (
    <div className = 'w3-animate-left'> 
       
          <h2 className = 'w3-text-grey' > {props.text}</h2>
        <ul className = 'w3-ul'>
                  <SubjectCard enableButton = {enable} id = {props.id} subject = {sub}/>
        </ul> 
           <br/><br/>
           <button onClick = {startQuiz} className = {` w3-large w3-round w3-red w3-margin w3-button ${disabled} `}>Start</button>
    </div>
  );
  }
  else{
      return (
       <SubjectContext.Provider value = {sub}>
       {props.id===1&&  <Questions1 /> }
       {props.id===2&&<Questions2  />}
      {/* {props.id ===3&&<Questions3 />}*/}
       </SubjectContext.Provider>
       );
    }
}

export default SubjectList;
