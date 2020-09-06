import React,{useState,useContext} from 'react';
import '../App.css';
import DataFetching from './DataFetching';

export const SubjectContext = React.createContext()
function SubjectList() {
	
	const [sel,setSel] = useState(true)
	const[sub,setSub] = useState('dbms')
	
	const startQuiz1= ()=>{
      setSel(false)
      setSub('dbms')
   }
   
   const startQuiz2= ()=>{
      setSel(false)
      setSub('daa')
   }
   
   const startQuiz3= ()=>{
      setSel(false)
      setSub('cd')
   }
   
   const startQuiz4= ()=>{
      setSel(false)
      setSub('ml')
   }
   
   const startQuiz5= ()=>{
      setSel(false)
      setSub('da')
   }
   
   const startQuiz6= ()=>{
      setSel(false)
      setSub('coi')
   }
   
   const startQuiz7= ()=>{
      setSel(false)
      setSub('')
   }
   
   
   if(sel){
  return (
    <div> 
           <ul className = 'w3-ul'>
                  <li onClick = {startQuiz1} className = 'w3-block w3-btn'>DBMS</li>
                  <li onClick = {startQuiz2} className = 'w3-block w3-btn'>DAA</li>
                  <li onClick = {startQuiz3} className = 'w3-block w3-btn'>DC</li>
                  <li onClick = {startQuiz4} className = 'w3-block w3-btn'>ML</li>
                  <li onClick = {startQuiz5} className = 'w3-block w3-btn'>DA</li>
                  <li onClick = {startQuiz6} className = 'w3-block w3-btn'>COI</li>
           </ul> 
    </div>
  );
  }
  else{
      return (
       <SubjectContext.Provider value = {sub}>
         <DataFetching /> 
       </SubjectContext.Provider>
       );
    }
}

export default SubjectList;
