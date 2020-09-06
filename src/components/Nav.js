import React , { useState,useEffect}from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Test from './Test';

function Nav() {
	
	const [clse, sce] = useState('w3-col  w3-pale-blue no-td')
    const [clsd, scd] = useState('w3-col w3-teal no-td')
    const [clsq, scq] = useState('w3-col  w3-pale-yellow no-td')
    
	const updateMenuE = () => {
       sce('w3-col  w3-blue no-td')
       scd('w3-col  w3-pale-green no-td')
       scq('w3-col  w3-pale-yellow no-td')  
    }
    
    const updateMenuD = () => {
       sce('w3-col  w3-pale-blue no-td')
       scd('w3-col  w3-teal no-td')
       scq('w3-col  w3-pale-yellow no-td')
       
    }
    
    const updateMenuQ = () => {
       sce('w3-col  w3-pale-blue no-td')
       scd('w3-col  w3-pale-green no-td')
       scq('w3-col  w3-yellow no-td')
       
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
             <Link onClick = {updateMenuE} className = {clse} to = "/explore">
              <p>Explore</p>
             </Link>
             <Link onClick = {updateMenuD} className = {clsd}  to ="/">
                <p>Home</p>
             </Link>
             <Link onClick = {updateMenuQ} className = {clsq} to = "/quiz">
              <p>Test</p>
             </Link>
       </nav>
       </div>   
       </>
  );
}

export default Nav;
