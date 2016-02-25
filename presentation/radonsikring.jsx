import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    radon1: require("./radonsikring/radonsperre400_1.jpg"),
    radon2: require("./radonsikring/radonsperre400-tilbehob_1-2.jpg"),
    radon3: require("./radonsikring/radonmembranSBS_2.jpg"),
    radon4: require("./radonsikring/radonmembranSBS-tilbehor_2-2.jpg")
};

preloader([images.radon1, images.radon2, images.radon3, images.radon4]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/radonsikring/" transitionDuration={800}>
		    <Slide  bgImage={images.radon1} tab="Radonspærre 400"></Slide>
		    <Slide  bgImage={images.radon2} tab="Tilbehør 400"></Slide>
		    <Slide  bgImage={images.radon3} tab="Radonmembran SBS"></Slide>
		    <Slide  bgImage={images.radon4} tab="Tilbehør SBS"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
