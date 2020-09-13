import React,{useState} from 'react';
import '../App.css';
import Graph from './Graph';
import TopBar from './TopBar';
import LoginPage from './LoginPage';

function Home() {

var userName = window.sessionStorage.getItem("userName");
var status = window.sessionStorage.getItem("loggedin");

const [loggedin,setLoggedIn] = useState(status)
 
 const isLoggedIn = ()=>{
     setLoggedIn(true)
 }
 
  return (
    <> 
      {loggedin&&<TopBar txt = {loggedin?'Welcome '+userName:'Login'}/>}
    {loggedin?<Graph />:<LoginPage  doLogin = {isLoggedIn}/>}  
    </>
  );
}

export default Home;
