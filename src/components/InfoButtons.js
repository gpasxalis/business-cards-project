import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export default function InfoButtons() {
  return (
    <div className="info--buttonsSection">
      <div className="info--item">
        <div className="info--button">
          <a className="button button--info" href="tel:+306978101030" target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon icon={faPhone} className="info--icon" />
          </a>
          <p className="info--text">
            Call Us
          </p>
        </div>
      </div>

      <div className="info--item">
        <div className="info--button">
          <a className="button button--info" href="mailto:gpasxalis94@gmail.com">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
          </a>
          <p className="info--text">
            Email Us
          </p>
        </div>
      </div>

      <div className="info--item">
        <div className="info--button">
          <a className="button button--info" href="https://m.me/gpasxalis94" target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon icon={faFacebookMessenger} className="info--icon" />
          </a>
          <p className="info--text">
            Messenger
          </p>
        </div>
      </div>

      <div className="info--item">
        <div className="info--button">
          <a className="button button--info" href="https://goo.gl/maps/7yHVuN9sK1kbu5E17">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} className="info--icon" />
          </a>
          <p className="info--text">
            Location
          </p>
        </div>
      </div>

      <div className="info--item">
        <div className="info--button">
          <a className="button button--info" href="https://www.linkedin.com/in/emanueledelmonte/" target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon icon={faGlobe} className="info--icon" />
          </a>
          <p className="info--text">
            Website
          </p>
        </div>
      </div>

    </div>
  );
}
