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


class Images extends React.Component {
    
    
    render() {
        return (
            <div>
                <Link className="backLink" href="/"> </Link>
                
                <Deck transition={[ "slide"]} progress="none" base="/images/" transitionDuration={800}>
                    <Slide   bgImage={images.city} />                                 
                    <Slide   bgImage={images.kat} />
                    <Slide   bgImage={images.logo} />                                                     

                </Deck>
            </div>
        );
    }


}

Images.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Images;
