import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Links, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {
    oversikt: require("./systemgodkjenning/Systemgodkjenning_2_1.jpg"),
};

const links = [
    {x:1410, y:790, link:"/systemgodkjenning/svillemembran"},
    {x:860, y:220, link:"/systemgodkjenning/flexwrap"},
    {x:670, y:280, link:"/systemgodkjenning/takmansjett"},
    {x:575, y:390, link:"/systemgodkjenning/rims"},
    {x:1153, y:680, link:"/vindsperrer/0"},
    {x:334, y:622, link:"/systemgodkjenning/tape"},
    {x:755, y:744, link:"/systemgodkjenning/vindu"}
]; 

preloader([images.oversikt]);


class Menu extends React.Component {
    
    render() {
        return (
           <Links className="clickable" links={links} >
           	<Link className="backLink" href="/"> </Link>
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
