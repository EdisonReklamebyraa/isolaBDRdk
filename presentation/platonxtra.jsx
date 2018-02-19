import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    platon1: require("./platonxtra/platonxtra_1.jpg"),
    platon2: require("./platonxtra/platonxtra-torvtag_2.jpg")

};

preloader([images.platon1, images.platon2]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/platonxtra/" transitionDuration={800}>
		    <Slide  bgImage={images.platon1} tab="Grundmur"></Slide>
		    <Slide  bgImage={images.platon2} tab="Tørvtag"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
