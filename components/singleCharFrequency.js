import React, { Component } from 'react';

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    componentDidUpdate = () => {
        string = this.props.fileData;
        var count = {};
        string.split('').forEach(function(s) {
            count[s] ? count[s]++ : count[s] = 1;
        });

        console.log(count);
    }

    render = () => {
        return (
            <div>
                <h2>Single char frequency</h2>
                <p>{this.props.fileData}</p>
            </div>
        );
    }
}

export default SingleCharFrequency;