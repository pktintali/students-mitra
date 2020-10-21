import React from 'react';
import '../../App.css';
import TopBar from '../TopBar';

function Schedule() {

var d = new Date()
const day = d.getDay()

const lunch = 'https://www.google.com/search?q=food+near+me'
const coi = 'https://chat.whatsapp.com/'
const cd = 'https://chat.whatsapp.com/'
const cdlab ='http://moodleglbitm.live:9091/course/view.php?id=187'
const mp = 'https://chat.whatsapp.com/' 
const dbms ='https://chat.whatsapp.com/'
const daa = 'https://chat.whatsapp.com/'
const da = 'http://moodleglbitm.live:9091/course/view.php?id=209'
const ml = 'http://moodleglbitm.live:9091/course/view.php?id=215'
const ttc1 ='https://meet.google.com/hee-mrfc-ewb'
const ttc2 = 'https://meet.google.com/jxo-wwxw-zej'
const pdp = 'http://lms.glbitm.org:9099/moodle/course/view.php?id=50#section-0'
const daaquiz = 'http://moodleglbitm.live:9091/course/view.php?id=192'

if(day===1){
return (
      <div className = 'w3-container'>
         <a href = {coi} target ='blank'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-right'>9:30-10:20 AM</p>
             <h3 className = 'w3-left'>NC+</h3>
           </div>
           </a><br></br><a href = {da} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>10:30-11:20 AM</p>
             <h3 className = 'w3-left'>DA</h3>
           </div>
           </a><br></br><a href = {daa} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>11:30 AM-12:20 PM</p>
             <h3 className = 'w3-left'>DAA</h3>
           </div>
           </a><br></br><a href = {dbms} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>12:30-1:20 PM</p>
             <h3 className = 'w3-left'>DBMS</h3>
           </div>
           </a><br></br><a href = {lunch} target ='blank'>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-right'>1:20-2:00 PM</p>
             <h3 className = 'w3-left'>Lunch</h3>
           </div>
           </a><br></br><a href = {daa} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>2:00-2:50 PM</p>
             <h3 className = 'w3-left'>DAA Lab</h3>
           </div>
           </a><br></br><a href = {ml} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>3:00-3:50 PM</p>
             <h3 className = 'w3-left'>MLT</h3>
           </div>
           </a><br></br><a href = {da} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>4:00-4:50 PM</p>
             <h3 className = 'w3-left'>DA Quiz</h3>
           </div>
           </a><br></br>
     </div>
  );
}
else if(day===2)
{
return (
      <div className = 'w3-container'>
      <a href = {cd} target ='blank'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-right'>9:30-10:20 AM</p>
             <h3 className = 'w3-left'>CD</h3>
           </div>
           </a><br></br><a href = {da} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>10:30-11:20 AM</p>
             <h3 className = 'w3-left'>DA</h3>
           </div>
           </a><br></br><a href = {ml} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>11:30 AM-12:20 PM</p>
             <h3 className = 'w3-left'>MLT</h3>
           </div>
           </a><br></br>
           <a target = 'blank' href = {pdp}><div className ='w3-container w3-card'>
             <p className = 'w3-right'>12:30-1:20 PM</p>
             <h3 className = 'w3-left'>PDP</h3>
           </div>
           </a><br></br><a href = {lunch} target ='blank'>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-right'>1:20-2:00 PM</p>
             <h3 className = 'w3-left'>Lunch</h3>
           </div>
           </a><br></br><a href = {ttc1} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>2:00-3:50 PM</p>
             <h3 className = 'w3-left'>TTC</h3>
           </div>
           </a><br></br><a href = {daaquiz} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>4:00-4:50 PM</p>
             <h3 className = 'w3-left'>DAA Quiz</h3>
           </div>
           </a><br></br>
     </div>
  );
}
else if(day===3){
return (
      <div className = 'w3-container'>
      <a href = {dbms} target ='blank'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-right'>9:30-10:20 AM</p>
             <h3 className = 'w3-left'>DBMS</h3>
           </div>
           </a><br></br><a href = {daa} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>10:30-11:20 AM</p>
             <h3 className = 'w3-left'>DAA</h3>
           </div>
           </a><br></br><a href = {ttc2} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>11:30 AM-01:20 PM</p>
             <h3 className = 'w3-left'>TTC</h3>
           </div>
           </a><br></br><a href = {lunch} target ='blank'>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-right'>1:20-2:00 PM</p>
             <h3 className = 'w3-left'>Lunch</h3>
           </div>
           </a><br></br><a href = {cdlab} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>2:00-2:50 PM</p>
             <h3 className = 'w3-left'>CD Lab</h3>
           </div>
           </a><br></br><a href = {da} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>3:00-3:50 PM</p>
             <h3 className = 'w3-left'>DA</h3>
           </div>
           </a><br></br><a href = {coi} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>4:00-4:50 PM</p>
             <h3 className = 'w3-left'>NC+ Quiz</h3>
           </div>
           </a><br></br>
     </div>
  );
}

else if(day===4){
return (
      <div className = 'w3-container'>
      <a href = {coi} target ='blank'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-right'>9:30-10:20 AM</p>
             <h3 className = 'w3-left'>NC+</h3>
           </div>
           </a><br></br><a href = {dbms} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>10:30-11:20 AM</p>
             <h3 className = 'w3-left'>DBMS Quiz</h3>
           </div>
           </a><br></br><a href = {pdp} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>11:30 AM-01:20 PM</p>
             <h3 className = 'w3-left'>PDP Training</h3>
           </div>
           </a><br></br><a href = {lunch} target ='blank'>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-right'>1:20-2:00 PM</p>
             <h3 className = 'w3-left'>Lunch</h3>
           </div>
           </a><br></br><a href = {cd} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>2:00-2:50 PM</p>
             <h3 className = 'w3-left'>CD</h3>
           </div>
           </a><br></br><a href = {dbms} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>3:00-3:50 PM</p>
             <h3 className = 'w3-left'>DBMS Lab</h3>
           </div>
           </a><br></br><a href = {ml} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>4:00-4:50 PM</p>
             <h3 className = 'w3-left'>MLT Quiz</h3>
           </div>
           </a><br></br>
     </div>
  );
}

else if(day===5){
return (
      <div className = 'w3-container'>
      <a href = {daa} target ='blank'>
          <div className ='w3-container w3-card'>
             <p className = 'w3-right'>9:30-10:20 AM</p>
             <h3 className = 'w3-left'>DAA</h3>
           </div>
           </a><br></br><a href = {cd} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>10:30-11:20 AM</p>
             <h3 className = 'w3-left'>CD</h3>
           </div>
           </a><br></br><a href = {dbms} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>11:30 AM-12:20 PM</p>
             <h3 className = 'w3-left'>DBMS</h3>
           </div>
           </a><br></br><a href = {pdp} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>12:30-1:20 PM</p>
             <h3 className = 'w3-left'>PDP</h3>
           </div>
           </a><br></br><a href = {lunch} target ='blank'>
           <div className ='w3-container w3-card w3-green'>
             <p className = 'w3-right'>1:20-2:00 PM</p>
             <h3 className = 'w3-left'>Lunch</h3>
           </div>
           </a><br></br><a href = {ml} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>2:00-2:50 PM</p>
             <h3 className = 'w3-left'>MLT</h3>
           </div>
           </a><br></br><a href = {mp} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>3:00-3:50 PM</p>
             <h3 className = 'w3-left'>MP</h3>
           </div>
           </a><br></br><a href = {cd} target ='blank'>
           <div className ='w3-container w3-card'>
             <p className = 'w3-right'>4:00-4:50 PM</p>
             <h3 className = 'w3-left'>CD Quiz</h3>
           </div>
           </a><br></br>
     </div>
  );
}

else if(day===6){
return <h1>Lunch Saturday</h1>;
}

else if(day===7){
return <h1>Lunch Sunday</h1>;
}

}

export default Schedule;
