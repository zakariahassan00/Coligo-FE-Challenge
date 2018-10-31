import React, { Component } from 'react';

class Logo extends Component {
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
                <h1>Coligo</h1>
            </div>
        )
    }
}

export default Logo ;