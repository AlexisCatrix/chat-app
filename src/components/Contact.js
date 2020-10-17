import PropTypes from "prop-types";
import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name}></img>
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"}>
            {props.status}
          </div>
          <div className="status-text">{props.statustext}</div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  statustext: PropTypes.string.isRequired,
};
