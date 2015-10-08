import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Links, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {
    oversikt: require("./Oversikt.jpg"),
};

const links = [
    {x:470, y:490, link:"/komplettdeal/0"},
    {x:270, y:198, link:"/images/isod"},
    {x:280, y:490, link:"/images/kilrenne"},
    {x:1590, y:490, link:"/images/softxtra"},
    {x:1140, y:180, link:"/images/zink"},
    {x:1850, y:1020, link:"/nyheter"}
]; 

preloader([images.city, images.kat]);


class Menu extends React.Component {
    
    render() {
        return (
            <Links className="clickable" links={links} >
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
