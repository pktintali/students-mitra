import React,{useState,useEffect} from 'react';
import '../App.css';

function SubjectCard(props) {

    const [c,setC] = useState(0); 
	const [col,setColor] = useState([''])
	const subList = ['dbms', 'ml', 'cd', 'daa', 'da', 'coi'];
	const subDetail = ['DataBase Management System', 'Machine Learning', 'Compiler Design', 'Design and Analysis of Algorithms', 'Data Analytics', 'Constitution of India'];

	const subItem= [];
	const cardItem = [];
    
    const cardStyle = {
      minHeight:'140px',
    } 
    
	for(let i =0;i<subList.length;i=i+2){
		  cardItem.push(
      <div className="w3-row">
           <div className="w3-col s6">
                <div style = {cardStyle} onClick = {()=>{
                 props.enableButton('')
                  if(props.id===1){
                  	undo();
                      col[i] = 'w3-green';
                      setC(c+1);
                }
           if(props.id===2){  
               col[i]  =  col[i] == 'w3-green'?'':'w3-green';
               setC(c+1);
            }
                if(props.id===1){props.subject[0] =subList[i]}
                if(props.id===2){
                if(!props.subject.includes(subList[i]))
                   props.subject.push(subList[i])    
              }else{
              	  
                }
 
              }} className = {` ${col[i]} w3-padding w3-card w3-margin w3-round-xlarge w3-card`}>
                    <h1>{subList[i].toUpperCase()}</h1>
                   <p className = 'w3-tiny'>{subDetail[i].toUpperCase()}</p>
              </div>
            </div>
            
           <div className="w3-col s6">
                <div style = {cardStyle} onClick = {()=>{
            props.enableButton('')
             if(props.id===1){
              undo();
              col[i+1] = 'w3-green';
              setC(c+1);
               }
               if(props.id===2){  
               col[i+1]  =  col[i+1] == 'w3-green'?'':'w3-green';
                  setC(c+1);
                }
                 if(props.id===1){props.subject[0] =subList[i+1]}
                 if(props.id===2){
                 if(!props.subject.includes(subList[i+1]))
                   props.subject.push(subList[i+1])    
                }else{
                    
                 }
              
                }} className = {` ${col[i+1]} w3-card w3-padding w3-margin w3-round-xlarge w3-card`}>
                   <h1>{subList[i+1].toUpperCase()}</h1>
                   <p className = 'w3-tiny'>{subDetail[i+1].toUpperCase()}</p>
              </div>
      </div>
    </div>
  );
  }

  function undo(){
   for(let j in subList){
     col[j]='w3-white';
    } 
}
    
 useEffect(()=>{
 	
},[c])
  return (
    <>
    {cardItem}
    </>
  );
}

export default SubjectCard;