import React from "react";
import UseNotifications from "./UseNotifications";
import TopBar from "../../TopBar";
import LoadingScreen from "../../LoadingScreen";
import getDevice from "../../utils/getDevice";
import firebase from "../../firebase";
import { useSelector } from "react-redux";
const Notifications = (props) => {
  const notifications = UseNotifications();
  const mobile = getDevice() === "Mobile";
  const dark = useSelector((state) => state.theme.dark);

  if (!firebase.getCurrentUsername()) {
    props.history.replace("/login");
    return null;
  }
  return (
    <>
      <TopBar notify={true} bool={true} txt={"Notifications"} />
      <h3>Notifications</h3>
      <div>
        {notifications && notifications.length > 0 ? (
          notifications.map((n) => {
            return (
              <div>
                {!n.to && (
                  <div
                    key={n.key}
                    style={{
                      marginLeft: mobile ? "3%" : "28%",
                      marginRight: mobile ? "3%" : "28%",
                      backgroundColor: dark ? "#1F1F1F" : "",
                      boxShadow: dark ? "1px 1px 3px 1px #888888" : "",
                    }}
                    className="w3-panel w3-card w3-round"
                  >
                    {n.image && (
                      <img
                        style={{
                          marginTop: 15,
                          maxHeight: mobile ? "200" : "300px",
                          maxWidth: mobile ? window.innerWidth - 55 : "600px",
                        }}
                        src={n.image}
                      />
                    )}
                    <p>{n.text}</p>
                    {n.link && (
                      <a
                        className="w3-button w3-green w3-round no-td"
                        href={n.link}
                        target="_blank"
                      >
                        {n.btnText}
                      </a>
                    )}
                    <p></p>
                  </div>
                )}
                {n.to === firebase.getCurrentUserEmail() && (
                  <div
                    key={n.key}
                    style={{
                      marginLeft: mobile ? "3%" : "28%",
                      marginRight: mobile ? "3%" : "28%",
                      backgroundColor: dark ? "#1F1F1F" : "",
                      boxShadow: dark ? "1px 1px 3px 1px #888888" : "",
                    }}
                    className="w3-panel w3-card w3-round"
                  >
                    {n.image && (
                      <img
                        style={{
                          marginTop: 15,
                          maxHeight: mobile ? "200" : "300px",
                          maxWidth: mobile ? window.innerWidth - 55 : "600px",
                        }}
                        src={n.image}
                      />
                    )}
                    <p>{n.text}</p>
                    {n.link && (
                      <a
                        className="w3-button w3-green w3-round no-td"
                        href={n.link}
                        target="_blank"
                      >
                        {n.btnText}
                      </a>
                    )}
                    <p></p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <LoadingScreen />
        )}
      </div>
    </>
  );
};

export default Notifications;
