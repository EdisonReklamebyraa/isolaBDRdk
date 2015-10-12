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
    takbelegg: require("./nyheter/Takbelegg_1.jpg"),
    rorosvinduet: require("./nyheter/Rorosvinduet_1.jpg"),
    zink: require("./nyheter/Zink_1.jpg"),
    tape: require("./nyheter/tape_1.jpg")
};

 
preloader([images.isod, images.kilrenne ,images.komplettdeal, images.softxtra, images.systemgodkjennig, images.gronnetak, images.dampsperrer, images.rorosvinduet, images.takbelegg, images.zink, images.tape]);


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

				      <Slide bgImage={images.isod } tickerText="Nytt underlagsbelegg med selvklebende omlegg - for skråtak ned til 6 graders takfall" />
				      <Slide bgImage={images.kilrenne } tickerText="Komplett løsning for alle typer lektede skråtak - Effektivt system som forenkler proffens hverdag" />
				      <Slide bgImage={images.komplettdeal } tickerText="Isola tilbyr nytt proffkonsept med komplette løsninger - Gir garantert tett og fuktsikkert bygg" />
				      <Slide bgImage={images.softxtra } tickerText="Ny generasjon Soft vindsperre - Xtra sterk, Xtra fuktsikker og Xtra monterinsvennlig" />
				      <Slide bgImage={images.systemgodkjennig } tickerText="Isola er først ute med SINTEF Byggforsk Teknisk Godkjenning av et komplett klimasystem" />
				      <Slide bgImage={images.zink } tickerText="Isola styrker seg på takrenner og lanserer monteringvennlig og komplett zink-sortiment" />
				      <Slide bgImage={images.tape } tickerText="Ny klebesterk og fleksibel vindsperre tape - Til forsegling av vindsperrer mot gjennomføringer og detaljer" />
				      <Slide bgImage={images.takbelegg } tickerText="Asfalt takbelegg og membraner, produsert i Norge for norske værforhold" />
				      <Slide bgImage={images.shingel } tickerText="30 års garanti på Isola Takshingel med ny og forbedret asfalt kvalitet" />
				      <Slide bgImage={images.gronnetak } tickerText="Effektive løsninger som beskytter, drenerer og fordrøyer større mengder regnvann" />
				      <Slide bgImage={images.dampsperrer } tickerText="Dampsperre med variabel vanndampmotstand - Sikkerhetsventil ved innestengt fukt" />
				      <Slide bgImage={images.rorosvinduet } tickerText="Nye aluminiumsbekledde vinduer fra Røros - Moderne, solide og vedlikeholdsvennlige" />

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
