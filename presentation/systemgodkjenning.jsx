
import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
    svillemembran: require("./systemgodkjenning/Systemgodkjenning_2_2_svillemembran.jpg"),
    flexwrap: require("./systemgodkjenning/Systemgodkjenning_2_3_flexwrap.jpg"),
    takmansjett: require("./systemgodkjenning/Systemgodkjenning_2_4_takmansjett.jpg"),
    rims: require("./systemgodkjenning/Systemgodkjenning_2_5_rims.jpg"),
    soft: require("./systemgodkjenning/Systemgodkjenning_2_6_1_soft.jpg"),
    tape: require("./systemgodkjenning/Systemgodkjenning_2_5_tape.jpg")
};

preloader([images.svillemembran, images.flexwrap, images.takmansjett, images.rims, images.soft, images.tape]);


class Images extends React.Component {
    
    
    render() {
        return (
            <div>
                <Link className="backLink" href="/systemhus/0/"> </Link>
                
                <Deck transition={[ "slide"]} progress="none" base="/systemgodkjenning/" transitionDuration={800}>
				    <Slide bgImage={images.svillemembran} id="svillemembran"/>
				    <Slide bgImage={images.flexwrap} id="flexwrap" />
				    <Slide bgImage={images.takmansjett} id="takmansjett" />
				    <Slide bgImage={images.rims} id="rims" />
				    <Slide bgImage={images.soft} id="soft" />
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


