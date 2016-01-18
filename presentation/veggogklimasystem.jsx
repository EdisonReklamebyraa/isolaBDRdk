import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    veggogklimasystem1: require("./veggogklimasystem/isosoft_1.jpg"),
    veggogklimasystem2: require("./veggogklimasystem/UVFacade_2.jpg"),
    veggogklimasystem3: require("./veggogklimasystem/Smart_3.jpg"),
    veggogklimasystem4: require("./veggogklimasystem/Reflective_4.jpg")

};

preloader([images.veggogklimasystem1, images.veggogklimasystem2, images.veggogklimasystem3, images.veggogklimasystem4]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/veggogklimasystem/" transitionDuration={800}>
		    <Slide  bgImage={images.veggogklimasystem1} tab="IsoSoft"></Slide>
		    <Slide  bgImage={images.veggogklimasystem2} tab="UV Facade"></Slide>
		    <Slide  bgImage={images.veggogklimasystem3} tab="AirGuard Smart"></Slide>
		    <Slide  bgImage={images.veggogklimasystem4} tab="AirGuard Reflective"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
