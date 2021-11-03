import React, { Component } from 'react';

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
        console.log(this.state);
    }

    componentDidMount = () => {
        console.log("mount");
    }

    componentDidUpdate = () => {
        console.log("update");
    }

    render = () => {
        return (
            <div>
                <h1>Single char frequency</h1>
            </div>
        );
    }
}

export default SingleCharFrequency;