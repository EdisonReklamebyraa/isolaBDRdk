import React from "react/addons";
import Base from "./base";
import Radium from "radium";

import {
    Text
} from "../src/spectacle";


var Ticker = React.createClass({

    timeOut: null,
    getInitialState() {
        return {
            txt: null
        };
    },
    
    updateSlide: function(slide) {

        this.setState({
            txt:slide.props.tickerText,
            timeout: slide.props.slideDuration || this.props.slideDuration
        });
        
        this.clearTimout(); 
        
    },

    clearTimout:function(){
        if(this.timeOut)    
            clearTimeout(this.timeOut);

        this.timeOut = null;
    },

    setTimeout: function(timeout){
        this.clearTimout();

        this.timeOut = setTimeout( this.props.nextSlide , timeout)
    },
    componentDidUpdate : function() {
        var width = React.findDOMNode(this.refs.txt).offsetWidth; 
        var node = React.findDOMNode(this.refs.ticker);

        node.style.left = screen.width + "px";             
        node.style.transition = "" ;

        setTimeout(function(){
            if(width == 0){
                node.style.transition = "all linear " +(0)+"ms" ; 
                node.style.left = screen.width + "px"
                
                if(this.props.nextSlide && this.state.timeout){
                    this.setTimeout(this.state.timeout); 
                }
                
            }else{
                var timeOut = (screen.width + width) * 5; 
                node.style.transition = "all linear " + timeOut +"ms" ; 
                node.style.left = - width + "px"
                
                if(this.props.nextSlide){
                    this.setTimeout(timeOut); 
                }
                
            }
            
        }.bind(this), 1000);

        
    },
    
    render: function() {

        return (
            <div className="ticker-wrap">
                <div className="ticker" ref="ticker" style={{left:screen.width }}>
                    <Text className="tickerTxt" ref="txt" >{this.state.txt || this.props.text}</Text>
                </div>
            </div>
        );

        
    },
});



module.exports =  Radium(Ticker);
