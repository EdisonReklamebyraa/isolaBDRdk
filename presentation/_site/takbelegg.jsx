import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    takbelegg: require("./takbelegg/takbelegg_2_1_takbelegg.jpg"),
    mestertekk: require("./takbelegg/takbelegg_2_2_mestertekk.jpg"),
    dobbeltlag: require("./takbelegg/takbelegg_2_3_dobbeltlag.jpg"),
    membraner: require("./takbelegg/takbelegg_2_4_membraner.jpg"),
    listetekking: require("./takbelegg/takbelegg_2_5_listetekking.jpg")
};

preloader([images.takbelegg, images.mestertekk, images.dobbeltlag, images.membraner, images.listetekking]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/takbelegg/" transitionDuration={800}>
		    <Slide  bgImage={images.takbelegg} tab="Isola takbelegg"></Slide>
		    <Slide  bgImage={images.mestertekk} tab="Isola Mestertekk"></Slide>
		    <Slide  bgImage={images.dobbeltlag} tab="Isola 2-lags tekking"></Slide>
		    <Slide  bgImage={images.membraner} tab="Isola Membraner"></Slide>
		    <Slide  bgImage={images.listetekking} tab="Isola Listetekking"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
