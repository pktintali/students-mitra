import React , { useState,useEffect}from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Test from './Test';

function Nav() {
	
	const [clse, sce] = useState('w3-white w3-border-white')
    const [clsd, scd] = useState('w3-pale-red w3-border-red')
    const [clsq, scq] = useState('w3-white w3-border-white')
    
	const updateMenuE = () => {
       sce('w3-pale-red  w3-border-red')
       scd('w3-white  w3-border-white')
       scq('w3-white  w3-border-white')  
    }
    
    const updateMenuD = () => {
       sce('w3-white w3-border-white')
       scd('w3-pale-red w3-border-red')
       scq('w3-white w3-border-white')
       
    }
    
    const updateMenuQ = () => {
       sce('w3-white  w3-border-white')
       scd('w3-white  w3-border-white')
       scq('w3-pale-red  w3-border-red')
       
    }
    
    useEffect(()=>{
       if(window.location.href.match('/explore')){
           updateMenuE();
       }
       else if(window.location.href.match('/quiz')){
           updateMenuQ();
       } 
       else{
          updateMenuD();
      }
     },[])
    
  return (
     <>

  <nav className="w3-hide-small w3-top">
      <div className="w3-bar w3-red w3-card w3-left-align w3-large">
        <Link to= '/' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white'>Dashboard</Link>
         <Link to= '/explore'  className='w3-bar-item w3-button w3-padding-large w3-hover-white'>Explore</Link>
         <Link to= '/quiz'  className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white'>Test</Link>
     </div>
    </nav>
      
       <div class = 'w3-bottom w3-hide-large w3-hide-medium w3-card'>
       <nav className = "w3-row">
             <Link onClick = {updateMenuE} className = {`w3-col no-td  w3-bottombar  w3-hover-border-red ${clse}`}to = "/explore">
              <p>Explore</p>
             </Link>
             <Link onClick = {updateMenuD} className = {`w3-col no-td w3-bottombar w3-hover-border-red ${clsd}`}  to ="/">
                <p>Home</p>
             </Link>
             <Link onClick = {updateMenuQ} className = {`w3-col no-td w3-bottombar  w3-hover-border-red ${clsq}`} to = "/quiz">
              <p>Test</p>
             </Link>
       </nav>
       </div>   
       </>
  );
}

export default Nav;
