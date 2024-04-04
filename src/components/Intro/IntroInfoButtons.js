import React from "react";
import { faEnvelope, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Button from "../Misc/Button.js";

export default function InfoButtons() {
  return (
    <div className="info--buttonsSection">
      <Button 
        link_url="tel:+306978101030" 
        link_paragraph="Call Us" 
        link_icon={faPhone} 
        button_class="info--button" 
        button_icon_class="button button--info"
      />

      <Button 
        link_url="mailto:gpasxalis94@gmail.com" 
        link_paragraph="Email Us" 
        link_icon={faEnvelope} 
        button_class="info--button" 
        button_icon_class="button button--info"
      />

      <Button 
        link_url="https://m.me/gpasxalis94" 
        link_paragraph="Messenger" 
        link_icon={faFacebookMessenger} 
        button_class="info--button" 
        button_icon_class="button button--info"
      />

      <Button 
        link_url="https://goo.gl/maps/7yHVuN9sK1kbu5E17" 
        link_paragraph="Location" 
        link_icon={faLocationDot} 
        button_class="info--button" 
        button_icon_class="button button--info"
      />

      <Button 
        link_url="https://www.linkedin.com/in/emanueledelmonte/" 
        link_paragraph="Website" 
        link_icon={faGlobe} 
        button_class="info--button" 
        button_icon_class="button button--info"
      />

    </div>
  );
}
