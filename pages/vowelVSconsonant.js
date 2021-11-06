import React, { Component } from 'react';

class VowelVSConsonant extends Component {
    constructor(props) {
        super(props);
        if(this.props.history.location.data == undefined){
            this.state = {fileData: '', charFreq: ''};
        } else {
            this.state = {fileData: this.props.history.location.data.fileData, charFreq: ''};
        }
    }

    render = () => {
        return (
            <div>
                <h1>Vowel VS Consonant</h1>
            </div>
        );
    }
}

export default VowelVSConsonant;