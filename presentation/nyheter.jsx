import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, Ticker
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {

    isod: require("./nyheter/IsoD_1.jpg"),
    kilrenne: require("./nyheter/Kilrenne_1.jpg"),
    komplettdeal: require("./nyheter/komplettdeal_1.jpg"),
    softxtra: require("./nyheter/SoftXtra_1.jpg"),
    systemgodkjennig: require("./nyheter/Systemgodkjenning_1.jpg"),
    shingel: require("./nyheter/Shingel_1.jpg"),
    gronnetak: require("./nyheter/Gronnetak_1.jpg"),
    dampsperrer: require("./nyheter/Dampsperrer_1.jpg"),
    rorosvinduet: require("./nyheter/Rorosvinduet_1.jpg"),
    zink: require("./nyheter/Zink_1.jpg"),
    tape: require("./nyheter/tape_1.jpg")
};

 
preloader([images.isod, images.kilrenne ,images.komplettdeal, images.softxtra, images.systemgodkjennig, images.gronnetak, images.dampsperrer, images.rorosvinduet, images.zink, images.tape]);


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

			              <Slide bgImage={images.isod } tickerText="Nytt underlagsbelegg med selvklebende omlegg" />
			              <Slide bgImage={images.kilrenne } tickerText="Komplett system som forenkler håndverkers hverdag" />
			              <Slide bgImage={images.komplettdeal } tickerText="Nytt og lønnsomt Isola-Tyvek proffkonsept" />
			              <Slide bgImage={images.tape } tickerText="Ny klebesterk og fleksibel vindsperre tape til forsegling av detaljer" />
			              <Slide bgImage={images.softxtra } tickerText="Ny generasjon vindsperre - xtra sterk - xtra monterinsvennlig" />
			              <Slide bgImage={images.systemgodkjennig } tickerText="Først i landet med SINTEF Byggforsk systemgodkjenning" />
			              <Slide bgImage={images.zink } tickerText="Monteringvennlig og komplett sortiment" />
			              <Slide bgImage={images.shingel } tickerText="30 års garanti på produktet" />
			              <Slide bgImage={images.gronnetak } tickerText="For fremtidens bymiljø" />
			              <Slide bgImage={images.dampsperrer } tickerText="Smarte løsninger" />
			              <Slide bgImage={images.rorosvinduet } tickerText="Nye aluminiumsbeklede vinduer fra Røros" />

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
