import React, { Component } from 'react';

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
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