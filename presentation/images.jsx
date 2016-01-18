import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    shingel: require("./shingel/Shingel_2.jpg"),
};

preloader([images.shingel]);


class Images extends React.Component {
    
    
    render() {
        return (
            <div>
                <Link className="backLink" href="/"> </Link>
                

                <Deck progress="none" base="/images/">
				    <Slide bgImage={images.shingel} id="shingel" />

                </Deck>
            </div>
        );
    }


}

Images.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Images;
