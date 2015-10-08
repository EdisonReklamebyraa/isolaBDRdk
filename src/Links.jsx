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
        var closest = this.props.links.reduce(function(min, p) {

            if (d(x,y,p.x,p.y) < min.d){
                min.point = p;

            }
            return min;
        }, {point: this.props.links[0], d:d(x,y,this.props.links[0].x,this.props.links[0].y)}).point;

        return closest;

    }
}



function d(x1,y1,x2,y2) {
    return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
}

Links.propTypes = { 
    links: React.PropTypes.object
};

Links.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Links;
