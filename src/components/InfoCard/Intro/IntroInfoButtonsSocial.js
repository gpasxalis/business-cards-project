import React from "react";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "../../Misc/Button.js";

export default function InfoButtonsSocial() {
  return (
    <div className="info--SocialSection">
        <div className="info--SocialSectionBox">
            <h3 className="info--socialText">Social Media</h3>
            <div className="info--buttonsSocialSection">

                <Button 
                    link_url="https://www.facebook.com/gpasxalis94" 
                    link_paragraph="Facebook" 
                    link_icon={faFacebook} 
                    button_class="info--buttonSocial" 
                    button_icon_class="button button--facebook"
                />

                <Button 
                    link_url="https://www.instagram.com/g_pasxalis/" 
                    link_paragraph="Instagram" 
                    link_icon={faInstagram} 
                    button_class="info--buttonSocial" 
                    button_icon_class="button button--instagram"
                />

                <Button 
                    link_url="https://gr.linkedin.com/in/paschalis-grammenos-a4b430114" 
                    link_paragraph="Linkedin" 
                    link_icon={faLinkedin} 
                    button_class="info--buttonSocial" 
                    button_icon_class="button button--linkedin"
                />

            </div>
        </div>

    </div>
  );
}
