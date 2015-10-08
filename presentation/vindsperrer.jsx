import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    uv: require("./systemgodkjenning/Systemgodkjenning_2_6_2_UV.jpg"),
    soft: require("./systemgodkjenning/Systemgodkjenning_2_6_1_soft.jpg")
};

preloader([images.uv, images.soft]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/systemhus/0/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/vindsperrer/" transitionDuration={800}>
		    <Slide  bgImage={images.uv} tab="UV fasade"></Slide>
		    <Slide  bgImage={images.soft} tab="Soft vindsperre"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
