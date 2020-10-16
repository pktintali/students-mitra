import React,{useState,useEffect} from 'react';
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
    
    const unitCard = (i)=>{	
    	return(
                <div style = {cardStyle} onClick = {()=>{
                 props.enableButton('')
                 
                  if(props.id===1){
                  	undo();
                      col[i] = 'w3-green';
                      props.subject[0] =subList[i]
                      setC(c+1);
                }
                
              if(props.id===2){  
               col[i]  =  col[i] == 'w3-green'?'':'w3-green';
                if(!props.subject.includes(subList[i])){
                   props.subject.push(subList[i])    
               }else{
                   const index = props.subject.indexOf(subList[i])
                   props.subject.splice(index, 1)
                   if(!props.subject.length>0){props.enableButton('w3-disabled')}
              } 
              setC(c+1);
            }
 
              }} className = {` ${col[i]} cardButton w3-padding w3-card w3-margin w3-round-xlarge w3-card`}>
                    <h1>{subList[i].toUpperCase()}</h1>
                   <p className = 'w3-tiny'>{subDetail[i].toUpperCase()}</p>
            </div>);
     }
     
	for(let i =0;i<subList.length;i=i+2){
		cardItem.push(
		<div className="w3-row">
		<div className="w3-col s6">
             {unitCard(i)}
        </div>
        <div className="w3-col s6">
            {unitCard(i+1)}
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