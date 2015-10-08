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
    {x:55, y:55, link:"/news/0"},
    {x:500, y:500, link:"/news/1"},
    {x:1000, y:1000, link:"/1"}
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
