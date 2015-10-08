/*global document*/

import React from "react/addons";
import context from "./src/utils/context";

import {Router, Route} from "react-router";
import BrowserHistory from "react-router/lib/BrowserHistory";

import Alt from "alt";
import Flux from "./src/flux/alt";

import News from "./presentation/news";
import Gallery from "./presentation/gallery";
import Menu from "./presentation/menu";
import Images from "./presentation/images";

import nyheter from "./presentation/nyheter";
import komplettdeal from "./presentation/komplettdeal";
import systemhus from "./presentation/systemhus";
import systemgodkjenning from "./presentation/systemgodkjenning";
import vindsperrer from "./presentation/vindsperrer";
import takbelegg from "./presentation/takbelegg";
import rorosvinduet from "./presentation/rorosvinduet";
import gronnetak from "./presentation/gronnetak";
import dampsperrer from "./presentation/dampsperrer";



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
                <Route path="/images/:slide" component={wrap(Images)} />

                <Route path="/:slide" component={wrap(nyheter)} />
				<Route path="/komplettdeal/:slide" component={wrap(komplettdeal)} />
				<Route path="/systemhus/:slide" component={wrap(systemhus)} />
				<Route path="/systemgodkjenning/:slide" component={wrap(systemgodkjenning)} />
				<Route path="/vindsperrer/:slide" component={wrap(vindsperrer)} />
				<Route path="/takbelegg/:slide" component={wrap(takbelegg)} />
				<Route path="/rorosvinduet/:slide" component={wrap(rorosvinduet)} />
				<Route path="/gronnetak/:slide" component={wrap(gronnetak)} />
				<Route path="/dampsperrer/:slide" component={wrap(dampsperrer)} />
                
            </Router>
        );
    }
  
}



React.render(( 
    <OuterMostParentComponent />
), document.body);
