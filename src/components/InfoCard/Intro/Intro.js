import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import {  faIdBadge } from "@fortawesome/free-solid-svg-icons";
import IntroInfoButtons from "./IntroInfoButtons";
import IntroInfoButtonsSocial from "./IntroInfoButtonsSocial";
import IntroInfo from "./IntroInfoText";
import ContactVCF from "../../Misc/vcard.vcf"

=======
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import IntroInfoButtons from "./IntroInfoButtons";
import IntroInfoButtonsSocial from "./IntroInfoButtonsSocial";
import IntroInfo from "./IntroInfoText";
import ContactVCF from "../../Misc/vcard.vcf";
>>>>>>> f44f8d1 (Updates)

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
<<<<<<< HEAD
            <FontAwesomeIcon icon={faIdBadge} className="info--icon" /> 
          </div>
          <p>
            Save Contact
          </p>
          
        </a>
      </div>
      
=======
            <FontAwesomeIcon icon={faIdBadge} className="info--icon" />
          </div>
          <p>Save Contact</p>
        </a>
      </div>

>>>>>>> f44f8d1 (Updates)
      <IntroInfoButtons />

      <IntroInfoButtonsSocial />
    </>
  );
}
