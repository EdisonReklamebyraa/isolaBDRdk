import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
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

preloader([images.city, images.kat]);


class Menu extends React.Component {
    
    render() {
        return (
           <div className="clickable" onClick={this.clicked.bind(this)} >
           	<Link className="backLink" href="/"> </Link>
            <Deck  progress="none" base="/" >
                <Slide  bgImage={images.oversikt}>                               
                </Slide>                 
            </Deck>
            </div>
        );
    }

    clicked(e){
        this.context.router.transitionTo(getClosestLink(e.clientX, e.clientY).link);       
    }
}

function getClosestLink(x,y){
    var closest = links.slice(1).reduce(function(min, p) {
        if (d(x,y,p.x,p.y) < min.d){
            min.point = p;

        }
        return min;
    }, {point: links[0], d:d(x,y,links[0].x,links[0].y)}).point;

    return closest;

}

function d(x1,y1,x2,y2) {
  return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
}



Menu.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Menu;
