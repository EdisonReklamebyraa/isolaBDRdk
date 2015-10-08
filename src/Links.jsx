import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Links extends Base {
    render() {
        return (
            <div {...this.props}  onClick={this.goto.bind(this)}>
                {this.props.children}
            </div>
        );
    }

    goto(e){
        this.context.router.transitionTo(this.getClosestLink(e.clientX, e.clientY).link);

        e.stopPropagation();
        e.preventDefault();
    }

    getClosestLink(x,y){

        var closest = this.props.links[0];
        var dist = d(x,y,this.props.links[0])

        for(var i = 1; i < this.props.links.length;i++){
            if(d(x,y,this.props.links[i]) < dist){
                closest = this.props.links[i];
                dist = d(x,y,this.props.links[i])
            }
            
        }
        return closest;

    }
}



function d(x,y,p) {
    return Math.sqrt( Math.pow((x-p.x), 2) + Math.pow((y-p.y), 2) );
}

Links.propTypes = { 
    links: React.PropTypes.object
};

Links.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Links;
