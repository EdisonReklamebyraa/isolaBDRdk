/*global document*/

import React from "react/addons";
import context from "./src/utils/context";

import {Router, Route} from "react-router";
import BrowserHistory from "react-router/lib/BrowserHistory";

import Alt from "alt";
import Flux from "./src/flux/alt";

import Deck from "./presentation/deck";
import News from "./presentation/news";
import Gallery from "./presentation/gallery";
import Menu from "./presentation/menu";
import Images from "./presentation/images";
import komplettdeal from "./presentation/komplettdeal";

import config from "./presentation/config";

require("normalize.css");
require("./themes/default/index.css");
require("highlight.js/styles/monokai_sublime.css");
require("./themes/default/fonts.css"); 


const flux = new Flux();
Alt.debug("flux", flux);



function wrap(c){
    return context(c, {styles: config.theme, print: config.print, flux}); 
}

class OuterMostParentComponent extends React.Component {
    render() {
        return (
            <Router history={new BrowserHistory()}>
                <Route path="/" component={wrap(Menu)} />
                <Route path="/news/:slide" component={wrap(News)} />
                <Route path="/gallery/:slide" component={wrap(Gallery)} />
                <Route path="/:slide" component={wrap(Deck)} />
                <Route path="/images/:slide" component={wrap(Images)} />

		<Route path="/komplettdeal/:slide" component={wrap(komplettdeal)} />
                
            </Router>
        );
    }
  
}



React.render(( 
    <OuterMostParentComponent />
), document.body);
