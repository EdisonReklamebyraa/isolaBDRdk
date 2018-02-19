import React from "react/addons";
import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";
import Interactive from "./interactive";

const images = {
    v1: require("./videos/video_1.png"),
    tagpap2: require("./tagpap/mestertekk_2.jpg"),
    tagpap3: require("./tagpap/To-Lags-Dekning_3.jpg"),
    tagpap4: require("./tagpap/Isola-Listedekning_4.jpg")

};

preloader([images.tagpap1, images.tagpap2, images.tagpap3, images.tagpap4]);

class Master extends React.Component {
    render() {
	    return (
	        <div>
		        <Link className="deckLink" href="/videos"> </Link>
		        <Deck progress="none" base="/videos/">
		            <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/v0h-cgzYD1s?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
		            <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/SusN6L-phzU?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
                    <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/liOxi7W-nv4?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
                    <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/OxbHRCs4K9s?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
                    <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/5M0OD190CMs?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
                    <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/cvs4wq7N8F0?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
                    <Slide>
                        <iframe
                            width="1880"
                            height="1057"
                            src="https://www.youtube.com/embed/r-a_WoDVvqE?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            style={{border:"0"}}
                        ></iframe>
                    </Slide>
		        </Deck>
	        </div>
	    );
    }
}

Master.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Master;
