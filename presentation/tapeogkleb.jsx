import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    tape1: require("./tapeogkleb/Tape_1.jpg"),
    tape2: require("./tapeogkleb/Tape-indoor_1.jpg"),
    tape3: require("./tapeogkleb/Tape-outdoor_2.jpg")
    

};

preloader([images.tape1, images.tape2]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/tapeogkleb/" transitionDuration={800}>
		    <Slide  bgImage={images.tape1} tab="Isola Tape- og Klæbesystem"></Slide>
		    <Slide  bgImage={images.tape2} tab="Indoor"></Slide>
		    <Slide  bgImage={images.tape3} tab="Outdoor"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
