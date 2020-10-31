import React, {useState} from 'react';
import '../../App.css';
import TopBar from '../TopBar';
import Schedule from './schedule';
import PostCard from './PostCard';

function Explore() {

const [visible,setVisible] = useState(false)
const display=()=>{
setVisible(true)
 }
  return (
  <>
     <TopBar txt = 'Explore'  bool = {false}/>
      <div className = 'mtop' ></div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      {!visible&&<div onClick = {display} style = {{height:'50px',width:'300px'}}></div>}
       {visible&&<Schedule />}
     <div className = 'mbot' ></div>
    </>
  );
}

export default Explore;
