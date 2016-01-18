import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    tagpap1: require("./tagpap/tagpap_1.jpg"),
    tagpap2: require("./tagpap/mestertekk_2.jpg"),
    tagpap3: require("./tagpap/To-Lags-Dekning_3.jpg"),
    tagpap4: require("./tagpap/Isola-Listedekning_4.jpg")

};

preloader([images.tagpap1, images.tagpap2, images.tagpap3, images.tagpap4]);


class Master extends React.Component {


    render() {
	return (
	    <div>
		<Link className="deckLink" href="/"> </Link>

		<Deck transition={[ "fade"]} progress="tabs" base="/tagpap/" transitionDuration={800}>
		    <Slide  bgImage={images.tagpap1} tab="Tagpap"></Slide>
		    <Slide  bgImage={images.tagpap2} tab="Mestertekk"></Slide>
		    <Slide  bgImage={images.tagpap3} tab="To-lags dækning"></Slide>
		    <Slide  bgImage={images.tagpap4} tab="Listedækning"></Slide>
		</Deck>
	    </div>
	);
    }


}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Master;
