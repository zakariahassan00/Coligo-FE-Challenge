/*
    this is sidebar or navbar item component.
*/
import React, { Component } from 'react';

class Element extends Component {
    state = {
        setup : {
            name : this.props.name,
            img: this.props.img,
            awf: this.props.awf
        },
    }

    render() {
        return(
            <div>
            <i className={this.state.setup.awf}></i>
            {this.state.setup.name}
            </div>
        )
    }
}

export default Element ;