import React, { Component } from 'react';

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
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