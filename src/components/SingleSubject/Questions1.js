import React,{useContext} from 'react';
import './style.css';
import TopBarWithCounter from '../TopBarWithCounter';
import DataFetching from '../DataFetching';
import {SubjectContext} from '../SubjectList';
import Counter from '../Counter';

function Questions1() {
	
	const subjectByContext = useContext(SubjectContext)
	
  return (
  <>
     <TopBarWithCounter />
      <div className = 'mtop' ></div>
      <DataFetching  type = 'single' sub = {subjectByContext[0]} />
      {/*<div className = 'w3-panel'>
          <button className = 'w3-button w3-red'>Submit</button>
      </div>*/}
      <div className = 'mbot'></div>
    </>
  );
}

export default Questions1;