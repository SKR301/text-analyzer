import React, { Component } from 'react';

class PairFrequency extends Component {
    constructor(props) {
        super(props);
        if(this.props.history.location.data == undefined){
            this.state = {fileData: '', charFreq: ''};
        } else {
            this.state = {fileData: this.props.history.location.data.fileData, charFreq: ''};
        }

        console.log(this.state.fileData);
    }

    render = () => {
        return (
            <div>
                <h1>Pair frequency</h1>
            </div>
        );
    }
}

export default PairFrequency;