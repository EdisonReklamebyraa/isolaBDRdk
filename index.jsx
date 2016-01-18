/*global document*/

import React from "react/addons";
import context from "./src/utils/context";

import {Router, Route} from "react-router";
import BrowserHistory from "react-router/lib/BrowserHistory";

import Alt from "alt";
import Flux from "./src/flux/alt";

import Menu from "./presentation/menu";
import Images from "./presentation/images";

import nyheter from "./presentation/nyheter";

import platonxtra from "./presentation/platonxtra";
import radonsikring from "./presentation/radonsikring";
import tapeogkleb from "./presentation/tapeogkleb";
import veggogklimasystem from "./presentation/veggogklimasystem";
import undertage from "./presentation/undertage";
import gronnetak from "./presentation/gronnetak";
import tagpap from "./presentation/tagpap";




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

                <Route path="/images/:slide" component={wrap(Images)} />

                <Route path="/:slide" component={wrap(nyheter)} />
		        
		        <Route path="/platonxtra/:slide" component={wrap(platonxtra)} />

		        <Route path="/radonsikring/:slide" component={wrap(radonsikring)} />
		        <Route path="/tapeogkleb/:slide" component={wrap(tapeogkleb)} />
		        <Route path="/veggogklimasystem/:slide" component={wrap(veggogklimasystem)} />
		        <Route path="/undertage/:slide" component={wrap(undertage)} />
		        <Route path="/gronnetak/:slide" component={wrap(gronnetak)} />
		        <Route path="/tagpap/:slide" component={wrap(tagpap)} />
		        
                
            </Router>
        );
    }
    
}



React.render(( 
    <OuterMostParentComponent />
), document.body);
