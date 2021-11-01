import React, { Component } from 'react';

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    componentDidUpdate = () => {
        var string = this.props.fileData.replace(/\s/g, '');
        var charFrequency = {};
        string.split('').forEach(function(ch) {
            charFrequency[ch] ? charFrequency[ch]++ : charFrequency[ch] = 1;
        });

        console.log(charFrequency);
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