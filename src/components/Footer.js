import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      Powered by
      <a
        href="https://github.com/xdelmo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dalution
      </a>
      
    </div>
  );
}
