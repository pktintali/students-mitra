import React, { useState } from "react";
import "../../App.css";

function Schedule() {
  var d = new Date();
  const [modal, setModal] = useState(false);
  const [day, setDay] = useState(d.getDay());

  const lunch = "https://www.google.com/search?q=food+near+me";
  const coi = "https://chat.whatsapp.com/";
  const cd = "https://chat.whatsapp.com/";
  const cdlab = "http://moodleglbitm.live:9091/course/view.php?id=187";
  const mp = "https://chat.whatsapp.com/";
  const dbms = "https://chat.whatsapp.com/";
  const daa = "https://chat.whatsapp.com/";
  const da = "http://moodleglbitm.live:9091/course/view.php?id=209";
  const ml = "http://moodleglbitm.live:9091/course/view.php?id=215";
  const ttc1 = "https://meet.google.com/hee-mrfc-ewb";
  const ttc2 = "https://meet.google.com/jxo-wwxw-zej";
  const pdp =
    "http://lms.glbitm.org:9099/moodle/course/view.php?id=50#section-0";
  const daaquiz = "http://moodleglbitm.live:9091/course/view.php?id=192";

  const toogleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const setTDay = (d) => {
    setDay(d);
    toogleModal();
  };

  const dayModal = (
    <div style={{ display: "block" }} className="w3-modal">
      <div className="w3-modal-content w3-border w3-border-red w3-animate-zoom w3-padding w3-ul w3-card-4">
        <li className="w3-large">
          <span
            onClick={toogleModal}
            className="w3-border w3-button w3-display-topright"
          >
            X
          </span>
          Select Day
        </li>
        <li onClick={() => setTDay(0)}>Sunday </li>
        <li onClick={() => setTDay(1)}>Monday</li>
        <li onClick={() => setTDay(2)}>Tuesday</li>
        <li onClick={() => setTDay(3)}>Wednesday</li>
        <li onClick={() => setTDay(4)}>Thursday</li>
        <li onClick={() => setTDay(5)}>Friday</li>
        <li onClick={() => setTDay(6)}>Saturdayday</li>
      </div>
    </div>
  );

  if (day === 1) {
    return (
      <>
        {modal && dayModal}
        <div className="w3-container">
          <a href={coi} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">9:30-10:20 AM</p>
              <h3 className="w3-left">NC+</h3>
            </div>
          </a>
          <br></br>
          <a href={da} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">10:30-11:20 AM</p>
              <h3 className="w3-left">DA</h3>
            </div>
          </a>
          <br></br>
          <a href={daa} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">11:30 AM-12:20 PM</p>
              <h3 className="w3-left">DAA</h3>
            </div>
          </a>
          <br></br>
          <a href={dbms} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">12:30-1:20 PM</p>
              <h3 className="w3-left">DBMS</h3>
            </div>
          </a>
          <br></br>
          <a href={lunch} target="blank">
            <div className="w3-container w3-card w3-green">
              <p className="w3-right">1:20-2:00 PM</p>
              <h3 className="w3-left">Lunch</h3>
            </div>
          </a>
          <br></br>
          <a href={daa} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">2:00-2:50 PM</p>
              <h3 className="w3-left">DAA Lab</h3>
            </div>
          </a>
          <br></br>
          <a href={ml} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">3:00-3:50 PM</p>
              <h3 className="w3-left">MLT</h3>
            </div>
          </a>
          <br></br>
          <a href={da} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">4:00-4:50 PM</p>
              <h3 className="w3-left">DA Quiz</h3>
            </div>
          </a>
          <br></br>
        </div>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  } else if (day === 2) {
    return (
      <>
        {modal && dayModal}
        <div className="w3-container">
          <a href={cd} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">9:30-10:20 AM</p>
              <h3 className="w3-left">CD</h3>
            </div>
          </a>
          <br></br>
          <a href={da} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">10:30-11:20 AM</p>
              <h3 className="w3-left">DA</h3>
            </div>
          </a>
          <br></br>
          <a href={ml} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">11:30 AM-12:20 PM</p>
              <h3 className="w3-left">MLT</h3>
            </div>
          </a>
          <br></br>
          <a target="blank" href={pdp}>
            <div className="w3-container w3-card">
              <p className="w3-right">12:30-1:20 PM</p>
              <h3 className="w3-left">PDP</h3>
            </div>
          </a>
          <br></br>
          <a href={lunch} target="blank">
            <div className="w3-container w3-card w3-green">
              <p className="w3-right">1:20-2:00 PM</p>
              <h3 className="w3-left">Lunch</h3>
            </div>
          </a>
          <br></br>
          <a href={ttc1} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">2:00-3:50 PM</p>
              <h3 className="w3-left">TTC</h3>
            </div>
          </a>
          <br></br>
          <a href={daaquiz} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">4:00-4:50 PM</p>
              <h3 className="w3-left">DAA Quiz</h3>
            </div>
          </a>
          <br></br>
        </div>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  } else if (day === 3) {
    return (
      <>
        {modal && dayModal}
        <div className="w3-container">
          <a href={dbms} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">9:30-10:20 AM</p>
              <h3 className="w3-left">DBMS</h3>
            </div>
          </a>
          <br></br>
          <a href={daa} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">10:30-11:20 AM</p>
              <h3 className="w3-left">DAA</h3>
            </div>
          </a>
          <br></br>
          <a href={ttc2} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">11:30 AM-01:20 PM</p>
              <h3 className="w3-left">TTC</h3>
            </div>
          </a>
          <br></br>
          <a href={lunch} target="blank">
            <div className="w3-container w3-card w3-green">
              <p className="w3-right">1:20-2:00 PM</p>
              <h3 className="w3-left">Lunch</h3>
            </div>
          </a>
          <br></br>
          <a href={cdlab} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">2:00-2:50 PM</p>
              <h3 className="w3-left">CD Lab</h3>
            </div>
          </a>
          <br></br>
          <a href={da} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">3:00-3:50 PM</p>
              <h3 className="w3-left">DA</h3>
            </div>
          </a>
          <br></br>
          <a href={coi} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">4:00-4:50 PM</p>
              <h3 className="w3-left">NC+ Quiz</h3>
            </div>
          </a>
          <br></br>
        </div>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  } else if (day === 4) {
    return (
      <>
        {modal && dayModal}
        <div className="w3-container">
          <a href={coi} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">9:30-10:20 AM</p>
              <h3 className="w3-left">NC+</h3>
            </div>
          </a>
          <br></br>
          <a href={dbms} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">10:30-11:20 AM</p>
              <h3 className="w3-left">DBMS Quiz</h3>
            </div>
          </a>
          <br></br>
          <a href={pdp} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">11:30 AM-01:20 PM</p>
              <h3 className="w3-left">PDP Training</h3>
            </div>
          </a>
          <br></br>
          <a href={lunch} target="blank">
            <div className="w3-container w3-card w3-green">
              <p className="w3-right">1:20-2:00 PM</p>
              <h3 className="w3-left">Lunch</h3>
            </div>
          </a>
          <br></br>
          <a href={cd} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">2:00-2:50 PM</p>
              <h3 className="w3-left">CD</h3>
            </div>
          </a>
          <br></br>
          <a href={dbms} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">3:00-3:50 PM</p>
              <h3 className="w3-left">DBMS Lab</h3>
            </div>
          </a>
          <br></br>
          <a href={ml} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">4:00-4:50 PM</p>
              <h3 className="w3-left">MLT Quiz</h3>
            </div>
          </a>
          <br></br>
        </div>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  } else if (day === 5) {
    return (
      <>
        {modal && dayModal}
        <div className="w3-container">
          <a href={daa} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">9:30-10:20 AM</p>
              <h3 className="w3-left">DAA</h3>
            </div>
          </a>
          <br></br>
          <a href={cd} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">10:30-11:20 AM</p>
              <h3 className="w3-left">CD</h3>
            </div>
          </a>
          <br></br>
          <a href={dbms} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">11:30 AM-12:20 PM</p>
              <h3 className="w3-left">DBMS</h3>
            </div>
          </a>
          <br></br>
          <a href={pdp} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">12:30-1:20 PM</p>
              <h3 className="w3-left">PDP</h3>
            </div>
          </a>
          <br></br>
          <a href={lunch} target="blank">
            <div className="w3-container w3-card w3-green">
              <p className="w3-right">1:20-2:00 PM</p>
              <h3 className="w3-left">Lunch</h3>
            </div>
          </a>
          <br></br>
          <a href={ml} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">2:00-2:50 PM</p>
              <h3 className="w3-left">MLT</h3>
            </div>
          </a>
          <br></br>
          <a href={mp} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">3:00-3:50 PM</p>
              <h3 className="w3-left">MP</h3>
            </div>
          </a>
          <br></br>
          <a href={cd} target="blank">
            <div className="w3-container w3-card">
              <p className="w3-right">4:00-4:50 PM</p>
              <h3 className="w3-left">CD Quiz</h3>
            </div>
          </a>
          <br></br>
        </div>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  } else if (day === 6) {
    return (
      <>
        {modal && dayModal}
        <h1>Enjoy Saturday</h1>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  } else if (day === 0) {
    return (
      <>
        {modal && dayModal}
        <h1>Enjoy Sunday</h1>
        <div
          onClick={toogleModal}
          style={{ height: "50px", width: "100%" }}
        ></div>
      </>
    );
  }
}
export default Schedule;
