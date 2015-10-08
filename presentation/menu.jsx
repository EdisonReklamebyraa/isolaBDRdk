import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
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
           <div className="clickable" onClick={this.clicked.bind(this)} >
           	
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
