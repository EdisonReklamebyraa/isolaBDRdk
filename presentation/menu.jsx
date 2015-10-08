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
/* ISO-d */
    {x:270, y:198, link:"/images/0"},
/* kilrenne */
    {x:280, y:490, link:"/images/1"},
/* softxtra */
    {x:1590, y:490, link:"/images/2"},
/* zink */
    {x:1140, y:180, link:"/images/3"}
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

    clicked(e){
        this.context.router.transitionTo(getClosestLink(e.clientX, e.clientY).link);       
    }
}



Menu.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Menu;
