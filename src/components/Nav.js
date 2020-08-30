import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
     <>
      <div class = 'w3-card w3-hide-small'>
       <nav className = "w3-row">
             <Link className = 'w3-col  w3-pale-yellow no-td' to = "/webapp/explore">
              <p>Explore</p>
             </Link>
             <Link className = 'w3-col w3-pale-red no-td'  to ="/webapp">
                <p>Home</p>
             </Link>
             <Link className = 'w3-col w3-pale-green no-td' to = "/webapp/quiz">
              <p>Quiz</p>
             </Link>
       </nav>
       </div>
       
       
       
       <div class = 'w3-bottom w3-hide-large w3-hide-medium w3-card'>
       <nav className = "w3-row">
             <Link className = 'w3-col  w3-pale-yellow no-td' to = "/webapp/explore">
              <p>Explore</p>
             </Link>
             <Link className = 'w3-col w3-pale-red no-td'  to ="/webapp">
                <p>Home</p>
             </Link>
             <Link className = 'w3-col w3-pale-green no-td' to = "/webapp/quiz">
              <p>Quiz</p>
             </Link>
       </nav>
       </div>
       </>
  );
}

export default Nav;
