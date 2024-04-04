import React from "react";
import EDMPhoto from "../images/emanuele-del-monte.jpg";
import CoverPhoto from "../images/cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faIdBadge } from "@fortawesome/free-solid-svg-icons";
import IntroInfoButtons from "./IntroInfoButtons";
import IntroInfoButtonsSocial from "./IntroInfoButtonsSocial";
import IntroInfo from "./IntroInfoText";
import ContactVCF from "./vcard.vcf"


export default function MainSection() {
  return (
    <div className="main--section">
      <img className="info--photo" src={CoverPhoto} alt="test cover" />
      <div className="profile--photo-section">
        <img className="info--profile-photo" src={EDMPhoto} alt="test profile" />
      </div>

      <IntroInfo />

      <div className="info--contact">
        <a
          className="info--saveContact"
          href={ContactVCF}
          target="_blank"
          rel="noreferrer"
          download
        >
          <div className="icon iconColor">
            <FontAwesomeIcon icon={faIdBadge} className="info--icon" /> 
          </div>
          <p>
            Save Contact
          </p>
          
        </a>
      </div>
      
      <IntroInfoButtons />

      <IntroInfoButtonsSocial />
    </div>
  );
}
