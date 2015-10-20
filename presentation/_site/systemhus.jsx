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
    {x:1476, y:780, link:"/systemgodkjenning/svillemembran"},
    {x:980, y:260, link:"/systemgodkjenning/flexwrap"},
    {x:740, y:280, link:"/systemgodkjenning/takmansjett"},
    {x:640, y:420, link:"/systemgodkjenning/rims"},
    {x:1250, y:620, link:"/vindsperrer/0"},
    {x:410, y:630, link:"/systemgodkjenning/tape"},
    {x:1230, y:300, link:"/systemgodkjenning/undertak"},
    {x:840, y:740, link:"/systemgodkjenning/vindu"}
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
