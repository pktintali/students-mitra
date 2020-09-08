import React,{useState} from 'react';
import './style.css';
import TopBar from '../TopBar';
import SubjectList from '../SubjectList';

function SingleSubject(props) {
	
    const [topbar,setTopBar]=useState(true)
	const [width,setWidth]= useState(true)
	
	const hidebar=()=>{
      setTopBar(false)
   }
   
   const fullWidth =()=>{
       setWidth(false)
   }  
   
  return (
   <>
   <div className = 'mtop' ></div>
  <div className ={width&&'centeredW'}>
     {topbar&&<TopBar txt = 'Test' click = {props.click} bool = {true}/>}
      {topbar&&<div className = 'mtop' ></div>}
      <SubjectList fullWidth = {fullWidth} hidebar = {hidebar} id= {props.id} text='Select any one'/>
     <div className = 'mbot'></div>
 </div>
</>
  );
}

export default SingleSubject;
