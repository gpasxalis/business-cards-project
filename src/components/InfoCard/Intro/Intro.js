import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faIdBadge } from "@fortawesome/free-solid-svg-icons";
import IntroInfoButtons from "./IntroInfoButtons";
import IntroInfoButtonsSocial from "./IntroInfoButtonsSocial";
import IntroInfo from "./IntroInfoText";
import ContactVCF from "../../Misc/vcard.vcf"


export default function Intro() {
  return (
    <>
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
    </>
  );
}
