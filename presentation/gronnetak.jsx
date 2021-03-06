import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    gronnetak1: require("./gronnetak/gronnetak_2_1.jpg"),
    gronnetak2: require("./gronnetak/gronnetak_2_2.jpg"),
    gronnetak3: require("./gronnetak/gronnetak_2_3.jpg"),
    gronnetak4: require("./gronnetak/gronnetak_2_4.jpg"),
    gronnetak5: require("./gronnetak/gronnetak_2_5.jpg"),
    gronnetak6: require("./gronnetak/gronnetak_2_6.jpg")
};

preloader([images.gronnetak1, images.gronnetak2, images.gronnetak3, images.gronnetak4, images.gronnetak5, images.gronnetak6]);


class Gallery extends React.Component {
    
    
    render() {
        return (
            <div>
                <Link className="deckLink" href="/"> </Link>

                <Deck transition={[ "fade"]} title="Isola Grønne tage" progress="gallery" base="/gronnetak/" transitionDuration={800}>
                    <Slide  bgImage={images.gronnetak5} tab="1"></Slide>
                    <Slide  bgImage={images.gronnetak6} tab="2"></Slide>
                    <Slide  bgImage={images.gronnetak1} tab="3"></Slide>
                    <Slide  bgImage={images.gronnetak2} tab="4"></Slide>
                    <Slide  bgImage={images.gronnetak3} tab="5"></Slide>
                    <Slide  bgImage={images.gronnetak4} tab="6"></Slide>
                </Deck>
            </div>
        );
    }


}

Gallery.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Gallery;
