import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    undertage1: require("./undertage/isokraftSBS_1.jpg"),
    undertage2: require("./undertage/IsolaTyvekSuproGrid_2.jpg"),
    undertage3: require("./undertage/IsolaTyvekPro_3.jpg"),
	undertage4: require("./undertage/isostark.jpg")
};

preloader([images.undertage1, images.undertage2, images.undertage3]);

class Master extends React.Component {
    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/undertage/" transitionDuration={800}>
		    <Slide  bgImage={images.undertage1} tab="Isola Isokraft SBS"></Slide>
		    <Slide  bgImage={images.undertage2} tab="Isola Tyvek Supro Grid"></Slide>
		    <Slide  bgImage={images.undertage3} tab="Isola Tyvek Pro"></Slide>
		    <Slide  bgImage={images.undertage4} tab="Isola Isostærk"></Slide>

		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
