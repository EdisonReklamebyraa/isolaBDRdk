import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Link extends Base {
    render() {
        return (
            <a onClick={this.goto.bind(this,this.props.href)} href={this.props.href} style={[this.context.styles.components.link, this.getStyles(), this.props.style]} {...this.props} >
                {this.props.children}
            </a>
        );
    }

    goto(href, e){
        this.context.router.transitionTo(href);
        e.stopPropagation();
        e.preventDefault();
    }
}


Link.propTypes = {
    children: React.PropTypes.node,
    href: React.PropTypes.string,
    style: React.PropTypes.object
};

Link.contextTypes = {
    styles: React.PropTypes.object,
    router: React.PropTypes.object
};

export default Link;
