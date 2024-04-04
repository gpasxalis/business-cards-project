import React from "react";
import FeaturedItem from "./FeaturedItem";

export default function FeaturedItems(props) {
	return (
		<div className="featured">
			<h3 className="featured--title">{ props.title }</h3>
			<FeaturedItem 
				featured_title="Το μενού μας" 
				featured_sub="Δείτε το μενού μας εδώ" 
				featured_url="https://gr.linkedin.com/in/paschalis-grammenos-a4b430114"
				featured_button="Δείτε το εδώ"
			/>

			<FeaturedItem 
				featured_title="Το μενού μας 2" 
				featured_sub="Δείτε το μενού μας εδώ 2" 
				featured_url="https://gr.linkedin.com/in/paschalis-grammenos-a4b430114"
				featured_button="Δείτε το εδώ"
			/>
    	</div>
  	);
}
