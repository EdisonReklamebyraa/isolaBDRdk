import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, Ticker
} from "../src/spectacle";

import preloader from "../src/utils/preloader";



const images = {
    city: require("./city.jpg"),
    kat: require("./kat.png"),
    logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {


    constructor(props) {
        super(props);               
    }  
    
    updatedSlide(i, slide){
        this.refs.ticker.updateSlide(slide);            
    }

    nextSlide(){
       this.refs.deck.next();
    }    

       
    render() {

        return (
            <div>
                <Link className="deckLink" href="/news/0"> </Link>


                <Ticker ref="ticker" nextSlide={this.nextSlide.bind(this)}  slideDuration={5000} />
                
                <Deck ref="deck"
                      transition={[ "slide"]}
                      progress="none"
                      updatedSlide={this.updatedSlide.bind(this)}                      
                      transitionDuration={1000}>

                    
                    <Slide bgColor="primary" tickerText="Lorem ipsum dolor sit amet." >         
                        <Heading size={1} fit caps>
                            Isola
                        </Heading>
                        <Heading size={3} fit caps textColor="black">
                            Where You Can Write Your Decks In JSX
                        </Heading>
                        <Link href="#/6">
                        <Text bold caps textColor="tertiary">View on Github</Text> </Link>


                        
                    </Slide>
                    <Slide  bgColor="black" notes="You can even put notes on your slide. How awesome is that?"
                            tickerText="In pharetra consequat augue. In congue. Curabitur pellentesque iaculis eros.">
                        <Image src={images.kat} margin="0px auto 40px" height="293px"/>
                        <Heading size={1} fit textColor="primary" textFont="secondary">
                            Wait what?
                        </Heading>
                    </Slide>
                    <Slide  bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
                        <CodePane lang="javascript"
                                  source={require("raw!./deck.example")}
                                  margin="20px auto"/>
                    </Slide>
                    <Slide  bgImage={images.city } bgDarken={0.75} slideDuration={1000}  >
                        <Appear fid="1">
                            <Heading size={1} caps fit textColor="primary">
                                Full Width
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={1} caps fit textColor="tertiary">
                                Adjustable Darkness
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading size={1} caps fit textColor="primary">
                                Background Imagery
                            </Heading>
                        </Appear>
                    </Slide>
                    <Slide  bgColor="primary">
                        <Heading caps fit>Flexible Layouts</Heading>
                        <Layout>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Left
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Right
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide  bgColor="black">
                        <BlockQuote>
                            <Quote>Wonderfully formatted quotes</Quote>
                            <Cite>Ken Wheeler</Cite>
                        </BlockQuote>
                    </Slide>
                    <Slide  bgColor="primary" slideDuration={0}>
                        <Heading caps fit size={1} textColor="tertiary">
                            Smooth
                        </Heading>
                        <Heading caps fit size={1} textColor="secondary">
                            Combinable Transitions
                        </Heading>
                    </Slide>
                  
                </Deck>
            </div>
        );
    }
}
