import React,{useState,useEffect} from 'react';
import Questions1 from  './SingleSubject/Questions1';
import Questions2 from  './SelectSubject/Questions2';
import './SingleSubject/style.css';

export const SubjectContext = React.createContext()
function SubjectList(props) {
	
	const [col,setColor] = useState(['']);
	const [sel,setSel] = useState(true)
	const [single,setSingle] = useState(false)
	const [select,setSelect] = useState(false)
	const [count,setCount] = useState(100)
	const [disabled,enable]=useState('w3-disabled')
	 const [sub,setSub] = useState([])
	const subList = ['dbms', 'ml', 'cd', 'daa', 'da', 'coi'];
	const subItem= [];
    
	for(let i in subList){
		
          subItem.push(
         <li onClick = {()=>{
         	    enable('')
                  if(props.id===1){
                  	  undo();
                  	  col[i]='w3-red'
                     }
                     if(props.id===2){  
                        col[i] = 'w3-red'
                     }
                 if(props.id===1){sub[0] =subList[i]}
                 if(props.id===2){
                 	if(!sub.includes(subList[i]))
                         sub.push(subList[i])    
                  }}} 
            className = {`w3-block w3-btn ${col[i]}`}>{subList[i].toUpperCase()}
        </li>
);}     
 
function undo(){
   for(let j in subList){
     col[j]='w3-white';
    } 
}
 
 useEffect(()=>{
    const interval = setInterval(tick,60)
    return ()=>{
         clearInterval(interval)
    }
 },[count,col])
  
   const tick =()=>{
      !select&&(count==0)&&setCount(100)
   	if(count>0){
     setCount(count-1)
     }
   } 

	const back=()=>{
     setSel(true)
    }
   
   const clearSelection=()=>{
       setSub([])
       undo()
       enable('w3-disabled')
   }
   
   const startQuiz=()=>{
      if(!disabled){
      	//alert('Be Careful! You Can Select Ans only once')
          setSel(false)
          props.hidebar()
         props.fullWidth()
      }
   }

   if(sel){
  return (
    <div className = 'w3-animate-left'> 
       
          <h2 className = 'w3-text-grey' > {props.text}</h2>
        <ul className = 'w3-ul'>
                   {subItem}
        </ul> 
           <br/><br/>
           {props.id===2&&<button onClick = {clearSelection} className = {` w3-large w3-round w3-margin w3-border w3-button ${disabled} `}>Clear</button>}
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
