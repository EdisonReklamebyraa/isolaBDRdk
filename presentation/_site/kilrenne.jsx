import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    kilrenne: require("./kilrenne/Kilrenne_2.jpg"),
};

preloader([images.kilrenne]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/kilrenne/" transitionDuration={800}>
		    <Slide  bgImage={images.kilrenne} tab="Kilrenne"></Slide>
		    <Slide tab="Monteringsvideo">
		    	<video   width="90%" height="100%" controls autoPlay >
					<source src="/presentation/kilrenne/kilrennemontering.mp4" type="video/mp4" />
		    	</video>
		    </Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
