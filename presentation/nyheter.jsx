import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, Ticker
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {

    undertage: require("./nyheter/DK_undertage.jpg"),
    shingel: require("./nyheter/DK_shingel.jpg"),
    radon: require("./nyheter/DK_radonsikring.jpg"),
    vegogklima: require("./nyheter/DK_veggogklima.jpg"),
    tapeogkleb: require("./nyheter/DK_tapeogklebesystem.jpg"),
    tagpap: require("./nyheter/DK_tagpap.jpg"),
    gronnetak: require("./nyheter/DK_gronnetage.jpg"),
    platon: require("./nyheter/DK_platon.jpg")
};

 
preloader([images.undertage, images.shingel ,images.radon, images.vegogklima, images.tapeogkleb, images.tagpap, images.dampsperrer, images.gronnetak, images.platon]);


   class News extends React.Component {
    constructor(props) {
        super(props);
      
    }  
    
    updatedSlide(i, slide){
        this.refs.ticker.updateSlide(slide);            
    }

       nextSlide(){
           if(this.refs.deck && this.refs.deck.next)
               this.refs.deck.next();
       }    

    
    render() {

        return (
            <div onClick={this.goto.bind(this)}>
		            <Link className="deckLink" href="/"> </Link>


                <Ticker ref="ticker" nextSlide={this.nextSlide.bind(this)}  slideDuration={5000} />
                
                <Deck ref="deck"
		                  transition={[ "fade"]}
                      progress="none"
                      updatedSlide={this.updatedSlide.bind(this)}                      
		                  transitionDuration={1000}>

				      <Slide bgImage={images.undertage } tickerText="Her kommer undertage nyhed" />
				      <Slide bgImage={images.shingel } tickerText="Her kommer shingel nyhed" />
				      <Slide bgImage={images.radon } tickerText="Her kommer radon nyhed" />
				      <Slide bgImage={images.vegogklima } tickerText="Her kommer væg og klima nyhed" />
				      <Slide bgImage={images.tapeogkleb } tickerText="Her kommer tape og klæb nyhed" />
				      <Slide bgImage={images.tagpap } tickerText="Her kommer tagpap nyhed" />
				      <Slide bgImage={images.gronnetak } tickerText="Her kommer grønne tage nyhed" />
				      <Slide bgImage={images.platon } tickerText="Her kommer Platon nyhed" />

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
