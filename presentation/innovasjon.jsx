import React from "react/addons";

import {
    Appear, AutoPlay, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, Ticker
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {

    S1: require("./innovasjon/S1.jpg"),
    S2: require("./innovasjon/S2.jpg"),
    S3: require("./innovasjon/S3.jpg"),
    S4: require("./innovasjon/S4.jpg"),
    S5: require("./innovasjon/S5.jpg"),
    S6: require("./innovasjon/S6.jpg"),
    S7: require("./innovasjon/S7.jpg"),
    S8: require("./innovasjon/S8.jpg"),
    S9: require("./innovasjon/S9.jpg"),
    S10: require("./innovasjon/S10.jpg"),
    S11: require("./innovasjon/S11.jpg"),
    S12: require("./innovasjon/S12.jpg"),
    S13: require("./innovasjon/S13.jpg")

};

preloader([images.s1, images.s2, images.s3, images.s4, images.s5, images.s6, images.s7, images.s8, images.s9, images.s10, images.s11, images.s12, images.s13]);

class Innovasjon extends React.Component {
    constructor(props) {
        super(props);
        this.contextTypes = {
            router: React.PropTypes.object.isRequired
        };

    }  
    
    updatedSlide(i, slide){
        this.refs.autoPlay.startTimer(slide);            
    }

    nextSlide(){
        this.refs.deck.next();
    }    

    
    render() {

        return (
            <div>
		            <AutoPlay ref="autoPlay" slideDuration={10000} nextSlide={this.nextSlide.bind(this)}  />
                <Deck ref="deck" base="/innovasjon/" 
		                  transition={[ "fade"]}
                      progress="none"
                       updatedSlide={this.updatedSlide.bind(this)}                      
		                  transitionDuration={1000}>

			              <Slide bgImage={images.S1 }/>
			              <Slide bgImage={images.S2 }/>
			              <Slide bgImage={images.S3 }/>
			              <Slide bgImage={images.S4 }/>
			              <Slide bgImage={images.S5 }/>
			              <Slide bgImage={images.S6 }/>
			              <Slide bgImage={images.S7 }/>
			              <Slide bgImage={images.S8 }/>
			              <Slide bgImage={images.S9 }/>
			              <Slide bgImage={images.S10 }/>
			              <Slide bgImage={images.S11 }/>
			              <Slide bgImage={images.S12 }/>
			              <Slide bgImage={images.S13 }/>

                </Deck>
            </div>
        );
    }
}

Innovasjon.contextTypes = {
    router: React.PropTypes.object.isRequired
};



module.exports = Innovasjon;
