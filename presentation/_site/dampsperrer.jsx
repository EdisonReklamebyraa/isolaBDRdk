import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    smart: require("./dampsperrer/Smart.jpg"),
    reflective: require("./dampsperrer/Reflective.jpg"),
    smart_funksjon: require("./dampsperrer/Smart_funksjon.jpg"),
    reflective_funksjon: require("./dampsperrer/Reflective_funksjon.jpg")

};

preloader([images.smart, images.reflective, images.smart_funksjon, images.reflective_funksjon]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/dampsperrer/" transitionDuration={800}>
		    <Slide  bgImage={images.smart} tab="Isola AirGuard® Smart"></Slide>
		    <Slide  bgImage={images.smart_funksjon} tab="Smart funksjon"></Slide>
		    <Slide  bgImage={images.reflective} tab="Isola AirGuard Reflective"></Slide>
		    <Slide  bgImage={images.reflective_funksjon} tab="Reflective funksjon"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
