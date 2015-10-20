import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    rorosvinduet: require("./rorosvinduet/rorosvinduet_2_1.jpg"),
    sprosser: require("./rorosvinduet/rorosvinduet_2_2.jpg")
};

preloader([images.rorosvinduet, images.sprosser]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/rorosvinduet/" transitionDuration={800}>
		    <Slide  bgImage={images.rorosvinduet} tab="Rorosvinduet"></Slide>
		    <Slide  bgImage={images.sprosser} tab="Aluminiumssprosser"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
