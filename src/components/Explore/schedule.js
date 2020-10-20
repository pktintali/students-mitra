import React from 'react';
import '../../App.css';
import TopBar from '../TopBar';

function Schedule() {

var d = new Date()
var day = d.getDay()

if(day===1){
return (
      <div className = 'w3-container'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-left'>9:30-10:20 AM</p>
             <h3 className = 'w3-right'>NC+</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>10:30-11:20 AM</p>
             <h3 className = 'w3-right'>DA</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>11:30 AM-12:20 PM</p>
             <h3 className = 'w3-right'>DAA</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>12:30-1:20 PM</p>
             <h3 className = 'w3-right'>DBMS</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-left'>1:20-2:00 PM</p>
             <h3 className = 'w3-right'>Enjoy</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>2:00-2:50 PM</p>
             <h3 className = 'w3-right'>DAA Lab</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>3:00-3:50 PM</p>
             <h3 className = 'w3-right'>MLT</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>4:00-4:50 PM</p>
             <h3 className = 'w3-right'>DA Quiz</h3>
           </div>
           <br></br>
     </div>
  );
}
else if(day===2)
{
return (
      <div className = 'w3-container'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-left'>9:30-10:20 AM</p>
             <h3 className = 'w3-right'>CD</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>10:30-11:20 AM</p>
             <h3 className = 'w3-right'>DA</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>11:30 AM-12:20 PM</p>
             <h3 className = 'w3-right'>MLT</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>12:30-1:20 PM</p>
             <h3 className = 'w3-right'>PDP</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-left'>1:20-2:00 PM</p>
             <h3 className = 'w3-right'>Enjoy</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>2:00-3:50 PM</p>
             <h3 className = 'w3-right'>TTC</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>4:00-4:50 PM</p>
             <h3 className = 'w3-right'>DAA Quiz</h3>
           </div>
           <br></br>
     </div>
  );
}
else if(day===3){
return (
      <div className = 'w3-container'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-left'>9:30-10:20 AM</p>
             <h3 className = 'w3-right'>DBMS</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>10:30-11:20 AM</p>
             <h3 className = 'w3-right'>DAA</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>11:30 AM-01:20 PM</p>
             <h3 className = 'w3-right'>TTC</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-left'>1:20-2:00 PM</p>
             <h3 className = 'w3-right'>Enjoy</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>2:00-2:50 PM</p>
             <h3 className = 'w3-right'>CD Lab</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>3:00-3:50 PM</p>
             <h3 className = 'w3-right'>DA</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>4:00-4:50 PM</p>
             <h3 className = 'w3-right'>NC+ Quiz</h3>
           </div>
           <br></br>
     </div>
  );
}

else if(day===4){
return (
      <div className = 'w3-container'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-left'>9:30-10:20 AM</p>
             <h3 className = 'w3-right'>NC+</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>10:30-11:20 AM</p>
             <h3 className = 'w3-right'>DBMS Quiz</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>11:30 AM-01:20 PM</p>
             <h3 className = 'w3-right'>PDP Training</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-left'>1:20-2:00 PM</p>
             <h3 className = 'w3-right'>Enjoy</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>2:00-2:50 PM</p>
             <h3 className = 'w3-right'>CD</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>3:00-3:50 PM</p>
             <h3 className = 'w3-right'>DBMS Lab</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>4:00-4:50 PM</p>
             <h3 className = 'w3-right'>MLT Quiz</h3>
           </div>
           <br></br>
     </div>
  );
}

else if(day===5){
return (
      <div className = 'w3-container'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-left'>9:30-10:20 AM</p>
             <h3 className = 'w3-right'>DAA</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>10:30-11:20 AM</p>
             <h3 className = 'w3-right'>CD</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>11:30 AM-12:20 PM</p>
             <h3 className = 'w3-right'>DBMS</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>12:30-1:20 PM</p>
             <h3 className = 'w3-right'>PDP</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-left'>1:20-2:00 PM</p>
             <h3 className = 'w3-right'>Enjoy</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>2:00-2:50 PM</p>
             <h3 className = 'w3-right'>MLT</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>3:00-3:50 PM</p>
             <h3 className = 'w3-right'>MP</h3>
           </div>
           <br></br>
           <div className ='w3-container w3-card'>
             <p className = 'w3-left'>4:00-4:50 PM</p>
             <h3 className = 'w3-right'>CD Quiz</h3>
           </div>
           <br></br>
     </div>
  );
}

else if(day===6){
return <h1>Enjoy Saturday</h1>;
}

else if(day===7){
return <h1>Enjoy Sunday</h1>;
}

}

export default Schedule;
