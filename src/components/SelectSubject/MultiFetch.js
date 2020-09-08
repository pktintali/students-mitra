import React,{useContext} from 'react';
import './style.css';
import TopBar from '../TopBar';
import DataFetching from '../DataFetching';
import {SubjectContext} from '../SubjectList';
//MultiFetching Technique

function MultiFetch() {
	const subjectByContext = useContext(SubjectContext)
	var rows = [];
    for (var i in subjectByContext) {
    rows.push( <DataFetching type = 'select' sub = {subjectByContext[i]} />);
}

return <>{rows}</>;

}

export default MultiFetch;