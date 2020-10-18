import PropTypes from "prop-types";
import React from "react";
import "./Contact.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img
          className="avatar"
          src={this.props.avatar}
          alt={this.props.name}
        ></img>
        <div>
          <div className="name">{this.props.name}</div>
          <div
            className="status"
            onClick={(event) => {
              const changeStatus = !this.state.online;
              this.setState({ online: changeStatus });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            >
              {this.state.status}
            </div>
            <div className="status-text">
              {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
