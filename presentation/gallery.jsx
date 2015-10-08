import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    city: require("./city.jpg"),
    kat: require("./kat.png"),
    logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);


class Gallery extends React.Component {
    
    
    render() {
        return (
            <div>
                <Link className="deckLink" href="/"> </Link>

                <Deck transition={[ "fade"]} title="How awesome!" progress="gallery" base="/gallery/" transitionDuration={800}>
                    <Slide  bgColor="primary"
                            tab="One">         
                        <Heading size={1} fit caps>
                            NEWS
                        </Heading>
                    </Slide>
                    <Slide   bgColor="black"
                             tab="Two"
                             notes="You can even put notes on your slide. How awesome is that?">
                        <Image src={images.kat} margin="0px auto 40px" height="293px"/>
                        <Heading size={1} fit textColor="primary" textFont="secondary">
                            what what?
                        </Heading>
                    </Slide>
                    <Slide  bgColor="#FF00FF"
                            tab="Three">         
                        <Heading size={1} fit caps>
                            NEWS
                        </Heading>
                    </Slide>
                </Deck>
            </div>
        );
    }


}

Gallery.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Gallery;
