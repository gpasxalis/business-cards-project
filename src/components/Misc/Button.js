import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Button(props) {
  return (
      <div className="info--item">
        <div className= { props.button_class }>
          <a className= { props.button_icon_class } href= { props.link_url } target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon icon={ props.link_icon } className="info--icon" />
          </a>
          <p className="info--text">
            { props.link_paragraph }
          </p>
        </div>
      </div>

  );
}
