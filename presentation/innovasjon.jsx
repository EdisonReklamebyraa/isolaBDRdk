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
    S13: require("./innovasjon/S13.jpg"),
    S14: require("./innovasjon/S14.jpg"),
    S15: require("./innovasjon/S15.jpg"),
    S16: require("./innovasjon/S16.jpg"),
    S17: require("./innovasjon/S17.jpg"),
    S18: require("./innovasjon/S18.jpg"),
    S19: require("./innovasjon/S19.jpg"),
    S20: require("./innovasjon/S20.jpg"),
    S21: require("./innovasjon/S21.jpg"),
    S22: require("./innovasjon/S22.jpg"),
    S23: require("./innovasjon/S23.jpg"),
    S24: require("./innovasjon/S24.jpg"),
    S25: require("./innovasjon/S25.jpg"),
    S26: require("./innovasjon/S26.jpg"),
    S27: require("./innovasjon/S27.jpg"),
    S28: require("./innovasjon/S28.jpg"),
    S29: require("./innovasjon/S29.jpg"),
    S30: require("./innovasjon/S30.jpg"),
    S31: require("./innovasjon/S31.jpg"),
    S32: require("./innovasjon/S32.jpg"),
    S33: require("./innovasjon/S33.jpg"),
    S34: require("./innovasjon/S34.jpg"),
    S35: require("./innovasjon/S35.jpg"),
    S36: require("./innovasjon/S36.jpg"),
    S37: require("./innovasjon/S37.jpg"),
    S38: require("./innovasjon/S38.jpg"),
    S39: require("./innovasjon/S39.jpg"),
    S40: require("./innovasjon/S40.jpg"),
    S41: require("./innovasjon/S41.jpg"),
    S42: require("./innovasjon/S42.jpg"),
    S43: require("./innovasjon/S43.jpg"),
    S44: require("./innovasjon/S44.jpg"),
    S45: require("./innovasjon/S45.jpg"),
    S46: require("./innovasjon/S46.jpg"),
    S47: require("./innovasjon/S47.jpg"),
    S48: require("./innovasjon/S48.jpg"),
    S49: require("./innovasjon/S49.jpg"),
    S50: require("./innovasjon/S50.jpg"),
    S51: require("./innovasjon/S51.jpg"),
    S52: require("./innovasjon/S52.jpg"),
    S53: require("./innovasjon/S53.jpg"),
    S54: require("./innovasjon/S54.jpg"),
    S55: require("./innovasjon/S55.jpg"),
    S56: require("./innovasjon/S56.jpg"),
    S57: require("./innovasjon/S57.jpg"),
    S58: require("./innovasjon/S58.jpg"),
    S59: require("./innovasjon/S59.jpg"),
    S60: require("./innovasjon/S60.jpg"),
    S61: require("./innovasjon/S61.jpg")

};

preloader([
images.s1, 
images.s2, 
images.s3, 
images.s4, 
images.s5, 
images.s6, 
images.s7,
images.s8,  
images.s9, 
images.s10, 
images.s11, 
images.s12, 
images.s13,
images.s14,
images.s15,
images.s16,
images.s17,
images.s18,
images.s19,
images.s20,
images.s21,
images.s22,
images.s23,
images.s24,
images.s25,
images.s26,
images.s27,
images.s28,
images.s29,
images.s30,
images.s31,
images.s32,
images.s33,
images.s34,
images.s35,
images.s36,
images.s37,
images.s38,
images.s39,
images.s40,
images.s41,
images.s42,
images.s43,
images.s44,
images.s45,
images.s46,
images.s47,
images.s48,
images.s49,
images.s50,
images.s51,
images.s52,
images.s53,
images.s54,
images.s55,
images.s56,
images.s57,
images.s58,
images.s59,
images.s60,
images.s61
]);

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
			              <Slide bgImage={images.S14 }/>
			              <Slide bgImage={images.S15 }/>
			              <Slide bgImage={images.S16 }/>
			              <Slide bgImage={images.S17 }/>
			              <Slide bgImage={images.S18 }/>
			              <Slide bgImage={images.S19 }/>
			              <Slide bgImage={images.S20 }/>
			              <Slide bgImage={images.S21 }/>
			              <Slide bgImage={images.S22 }/>
			              <Slide bgImage={images.S23 }/>
			              <Slide bgImage={images.S24 }/>
			              <Slide bgImage={images.S25 }/>
			              <Slide bgImage={images.S26 }/>
			              <Slide bgImage={images.S27 }/>
			              <Slide bgImage={images.S28 }/>
			              <Slide bgImage={images.S29 }/>
			              <Slide bgImage={images.S30 }/>
			              <Slide bgImage={images.S31 }/>
			              <Slide bgImage={images.S32 }/>
			              <Slide bgImage={images.S33 }/>
			              <Slide bgImage={images.S34 }/>
			              <Slide bgImage={images.S35 }/>
			              <Slide bgImage={images.S36 }/>
			              <Slide bgImage={images.S37 }/>
			              <Slide bgImage={images.S38 }/>
			              <Slide bgImage={images.S39 }/>
			              <Slide bgImage={images.S40 }/>
			              <Slide bgImage={images.S41 }/>
			              <Slide bgImage={images.S42 }/>
			              <Slide bgImage={images.S43 }/>
			              <Slide bgImage={images.S44 }/>
			              <Slide bgImage={images.S45 }/>
			              <Slide bgImage={images.S46 }/>
			              <Slide bgImage={images.S47 }/>
			              <Slide bgImage={images.S48 }/>
			              <Slide bgImage={images.S49 }/>
			              <Slide bgImage={images.S50 }/>
			              <Slide bgImage={images.S51 }/>
			              <Slide bgImage={images.S52 }/>
			              <Slide bgImage={images.S53 }/>
			              <Slide bgImage={images.S54 }/>
			              <Slide bgImage={images.S55 }/>
			              <Slide bgImage={images.S56 }/>
			              <Slide bgImage={images.S57 }/>
			              <Slide bgImage={images.S58 }/>
			              <Slide bgImage={images.S59 }/>
			              <Slide bgImage={images.S60 }/>
			              <Slide bgImage={images.S61 }/>

                </Deck>
            </div>
        );
    }
}

Innovasjon.contextTypes = {
    router: React.PropTypes.object.isRequired
};



module.exports = Innovasjon;
