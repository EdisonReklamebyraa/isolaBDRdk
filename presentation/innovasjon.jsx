import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, Ticker
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {

    S1: require("./innovasjon/S1_clean.jpg"),
    S2: require("./innovasjon/S2_clean.jpg"),
    S3: require("./innovasjon/S3_clean.jpg"),
    S4: require("./innovasjon/S4_clean.jpg"),
    S5: require("./innovasjon/S5_clean.jpg"),
    S6: require("./innovasjon/S6_clean.jpg"),
    S7: require("./innovasjon/S7_clean.jpg"),
    S8: require("./innovasjon/S8_clean.jpg"),
    S9: require("./innovasjon/S9_clean.jpg"),
    S10: require("./innovasjon/S10_clean.jpg"),
    S11: require("./innovasjon/S11_clean.jpg"),
    S12: require("./innovasjon/S12_clean.jpg"),
    S13: require("./innovasjon/S13_clean.jpg")

};

preloader([images.s1, images.s2, images.s3, images.s4, images.s5, images.s6, images.s7, images.s8, images.s9, images.s10, images.s11, images.s12, images.s13]);

   class News extends React.Component {
    constructor(props) {
        super(props);
        this.contextTypes = {
            router: React.PropTypes.object.isRequired
        };

    }  
    
    updatedSlide(i, slide){
        this.refs.ticker.updateSlide(slide);            
    }

    nextSlide(){
        this.refs.deck.next();
    }    

    
    render() {

        return (
            <div onClick={this.goto.bind(this)}>
		            <Link className="backLink" href="/0"> </Link>


                
                <Deck ref="ticker" base="/innovasjon/" 
		                  transition={[ "fade"]}
                      progress="none"
                                            
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

    goto(e){
        this.context.router.transitionTo("/");
        e.stopPropagation();
        e.preventDefault();
    }

}

News.contextTypes = {
    router: React.PropTypes.object.isRequired
};



module.exports = News;
