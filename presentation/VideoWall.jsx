import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Links, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {
    oversikt: require("./VideoWall.jpg"),
};

const links = [
    {x:270, y:160, link:"/videos/0"},
    {x:270, y:490, link:"/videos/1"},
    {x:710, y:160, link:"/videos/2"},
    {x:710, y:490, link:"/videos/3"},
    {x:1160, y:160, link:"/videos/4"},
    {x:1160, y:490, link:"/videos/5"},
    {x:1600, y:160, link:"/videos/6"},
];

preloader([images.oversikt]);


class Menu extends React.Component {

    render() {
        return (
            <Links className="clickable" links={links} >
                <Link className="backLink" href="/0"> </Link>
                <Deck  progress="none" base="/" >
                    <Slide  bgImage={images.oversikt}>
                    </Slide>
                </Deck>
            </Links>
        );
    }
}

Menu.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Menu;
