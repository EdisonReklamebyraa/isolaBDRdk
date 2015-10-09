import React from "react/addons";
import Base from "./base";
import Radium from "radium";

import {
    Text
} from "../src/spectacle";


var AutoPlay = React.createClass({

    timeOut: null,
    getInitialState() {
        return {
            timeout: 10000
        };
    },
    
    startTimer: function(slide) {


        this.clearTimout(); 
        this.setState({
            timeout: slide.props.slideDuration || this.props.slideDuration
        });
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

    componentWillUnmount: function(){
       this.clearTimout(); 
    },
    
    componentDidUpdate : function() {
        this.setTimeout(this.state.timeout);         
    },
    render : function() {
        return (<span></span>);
    }
    
});


module.exports =  Radium(AutoPlay);
