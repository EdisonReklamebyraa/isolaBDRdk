import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    smart: require("./dampsperrer/Smart.jpg"),
    reflective: require("./dampsperrer/Reflective.jpg")
};

preloader([images.smart, images.reflective]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/dampsperrer/" transitionDuration={800}>
		    <Slide  bgImage={images.smart} tab="Isola AirGuard® Smart"></Slide>
		    <Slide  bgImage={images.reflective} tab="Isola AirGuard Reflective"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
