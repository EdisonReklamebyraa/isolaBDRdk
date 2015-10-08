import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    zink: require("./zink/Zink_2.jpg"),
    produkter: require("./zink/Zink_2_2.jpg")
};

preloader([images.takbelegg, images.mestertekk, images.dobbeltlag, images.membraner, images.listetekking]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/zink/" transitionDuration={800}>
		    <Slide  bgImage={images.zink} tab="Forenkler montering"></Slide>
		    <Slide  bgImage={images.produkter} tab="Stort utvalg av deler"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
