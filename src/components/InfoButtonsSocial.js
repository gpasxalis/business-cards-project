import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function InfoButtonsSocial() {
  return (
    <div className="info--SocialSection">
        <div className="info--SocialSectionBox">
            <h3 className="info--socialText">Social Media</h3>
            <div className="info--buttonsSocialSection">
                <div className="info--item">
                    <div className="info--buttonSocial">
                        <a className="button button--facebook" href="tel:+306978101030" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} className="info--icon" />
                        </a>
                        <p className="info--text">
                            Facebook
                        </p>
                    </div>
                </div>

                <div className="info--item">
                    <div className="info--buttonSocial">
                        <a className="button button--instagram" href="mailto:info@emanueledelmonte.it">
                        {" "}
                        <FontAwesomeIcon icon={faInstagram} className="info--icon" />
                        </a>
                        <p className="info--text">
                            Instagram
                        </p>
                    </div>
                </div>

                <div className="info--item">
                    <div className="info--buttonSocial">
                        <a className="button button--linkedin" href="https://www.linkedin.com/in/emanueledelmonte/" target="_blank" rel="noopener noreferrer">
                        {" "}
                        <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
                        </a>
                        <p className="info--text">
                            Linkedin
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}
