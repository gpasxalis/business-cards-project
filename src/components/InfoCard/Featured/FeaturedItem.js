import React from "react";

export default function FeaturedItem(props) {
  return (
      <div className="featured--media">
        <div className="featured--mediaInfo">
          <h4 className="featured--mediaTitle">{ props.featured_title }</h4>
          <p className="featured--mediaSub">{ props.featured_sub }</p>
          <a className="button--mediaBtn" href= { props.featured_url } rel="noopener noreferrer">
            { props.featured_button }
          </a>
        </div>
      </div>
  );
}
