import React from "react";
import LogoPhoto from "../images/logo.png";
import CoverPhoto from "../images/cover_me.png";


export default function Header() {
  return (
    <>
        <img className="info--photo" src={CoverPhoto} alt="test cover" />
        <div className="profile--photo-section">
        <img className="info--profile-photo" src={LogoPhoto} alt="test profile" />
        </div>
    </>
  );
}
