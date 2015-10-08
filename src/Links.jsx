import React from "react/addons";
import Base from "./base";
import Radium from "radium";

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
        var p = getRelativePoint(); 
        this.context.router.transitionTo(this.getClosestLink(getRelativePoint(e.clientX, e.clientY)).link);
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


function getRelativePoint(x,y){
    return {
        x: (x/screen.width)*1920,
        y: (y/screen.height)*1080
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
