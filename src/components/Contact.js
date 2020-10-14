import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <enclosingtag className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/88.jpg"
        alt="profil_picture"
      ></img>
      <nameandstatus>
        <name className="name">Arron Davis</name>
        <div className="status">
          <dotstatus className="status-online"></dotstatus>
          <textindicator className="status-text">online</textindicator>
        </div>
      </nameandstatus>
    </enclosingtag>
  );
}

export default Contact;
