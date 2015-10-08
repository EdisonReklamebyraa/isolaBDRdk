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
    {x:1330, y:720, link:"/systemgodkjenning/svillemembran"},
    {x:884, y:194, link:"/systemgodkjenning/flexwrap"},
    {x:1330, y:720, link:"/systemgodkjenning/takmansjett"},
    {x:638, y:413, link:"/systemgodkjenning/rims"},
    {x:438, y:720, link:"/vindsperrer/0"},
    {x:1330, y:720, link:"/systemgodkjenning/soft"}   
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
