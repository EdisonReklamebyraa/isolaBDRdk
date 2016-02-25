import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    isod: require("./isod/IsoD_2.jpg"),
    kilrenne: require("./kilrenne/Kilrenne_2.jpg"),
    softxtra: require("./softxtra/SoftXtra_2.jpg"),
    zink: require("./zink/Zink_2.jpg"),
    shingel: require("./shingel/Shingel_2.jpg"),
    tape: require("./tape/tape_2.jpg")
};

preloader([images.isod, images.kilrenne, images.softxtra, images.zink, images.shingel]);


class Images extends React.Component {
    
    
    render() {
        return (
            <div>
                <Link className="backLink" href="/"> </Link>
                

                <Deck progress="none" base="/images/">
				    <Slide bgImage={images.isod} id="isod"/>
				    <Slide bgImage={images.kilrenne} id="kilrenne" />
				    <Slide bgImage={images.softxtra} id="softxtra" />
				    <Slide bgImage={images.zink} id="zink" />
				    <Slide bgImage={images.shingel} id="shingel" />
				    <Slide bgImage={images.tape} id="tape" />


                </Deck>
            </div>
        );
    }


}

Images.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Images;
