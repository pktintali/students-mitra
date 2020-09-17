import React,{useContext} from 'react';
import './style.css';
import TopBar from '../../TopBar';
import DataFetching from '../DataFetching';
import {SubjectContext} from '../SubjectList';

function Questions1() {
	
const subjectByContext = useContext(SubjectContext)
	
  return (
  <>
     <TopBar bool = {false} txt = {subjectByContext[0].toUpperCase()+'  Test'}/>
      <div className = 'mtop' ></div>
      <DataFetching  type = 'single' sub = {subjectByContext[0]} />
      <div className = 'mbot'></div>
    </>
  );
}

export default Questions1;