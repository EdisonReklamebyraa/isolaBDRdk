import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    komplettdeal: require("./komplettdeal/komplettdeal_2_1.jpg"),
    garanti: require("./komplettdeal/komplettdeal_2_2.jpg"),
    faglig: require("./komplettdeal/komplettdeal_2_3.jpg"),
    systemgodkjenning: require("./komplettdeal/komplettdeal_2_4.jpg")
};

preloader([images.komplettdeal, images.garanti, images.faglig, images.systemgodkjenning]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/komplettdeal/" transitionDuration={800}>
		    <Slide  bgImage={images.komplettdeal} tab="Komplett deal"></Slide>
		    <Slide  bgImage={images.garanti} tab="Garanti"></Slide>
		    <Slide  bgImage={images.faglig} tab="Faglig oppdatering"></Slide>
		    <Slide  bgImage={images.systemgodkjenning} tab="Systemgodkjenning"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
