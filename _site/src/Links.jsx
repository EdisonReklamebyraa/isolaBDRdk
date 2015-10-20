import React from "react/addons";
import Base from "./base";
import Radium from "radium";


var _w = 1920;
var _h = 1080;
var _body = document.getElementsByTagName('body')[0];

@Radium
class Links extends Base {
    render() {
        return (
            <div key="Links" {...this.props}  onClick={this.goto.bind(this)}>
                {this.props.children}
            </div>
        );
    }

    goto(e){
        var p = getRelativePoint(e.clientX, e.clientY); 
        this.context.router.transitionTo(this.getClosestLink(p).link);
        e.stopPropagation();
        e.preventDefault();
    }

    getClosestLink(o){
        
        var closest = this.props.links[0];
        var dist = d(o,this.props.links[0])

            console.log("Relative XY", o); 
            
        for(var i = 1; i < this.props.links.length;i++){
            if(d(o,this.props.links[i]) < dist){
                closest = this.props.links[i];
                dist = d(o,this.props.links[i])
            }
            
        }
        return closest;

    }
}


function getXRatio(){
    return {
        w: _body.offsetWidth,
        h: (_body.offsetWidth / _w) * _h,
        s: _body.offsetWidth / _w
    }
}

function getYRatio(){
    return {
        w: (_body.offsetHeight / _h) * _w,
        h: _body.offsetHeight,
        s: _body.offsetHeight / _h
    }
}

function getXYOffset(){
    var scaleW = getXRatio();
    var scaleH = getYRatio();
    var scale;
    

    if(scaleW.h >= _h && scaleH.w >= _w){
        scale = ((scaleW.h - _body.offsetHeight) >  (scaleW.w - _body.offsetWidth))? scaleW : scaleH        
    }else if(scaleW.h > _h && scaleH.w < _w){
        scale = scaleW;
    }else{
        scale = scaleH;
    }

    return {
        x: ((scale.w - _body.offsetWidth)/2)/scale.s,
        y: ((scale.h - _body.offsetHeight)/2)/scale.s        
    }
    
}


function getRelativePoint(x,y){
    var offset = getXYOffset();
        
    return {
        x: ((x + offset.x)/_body.offsetWidth)*_w,
        y: ((y + offset.y)/_body.offsetHeight)*_h
    }   
}


function d(o,p) {
    return Math.sqrt( Math.pow((o.x-p.x), 2) + Math.pow((o.y-p.y), 2) );
}

Links.propTypes = { 
    links: React.PropTypes.array
};

Links.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Links;
