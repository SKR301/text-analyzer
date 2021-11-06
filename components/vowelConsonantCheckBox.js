import React, { Component } from 'react';

class charFrequencyCheckBox extends Component {
    constructor(props){
        super(props);
    }

    render = () => {
        return (
            <div>
                <b>Case Filter:</b>
                <div id = 'case'>
                    <input type = 'radio' name = 'case' id = 'lower' onChange ={this.props.caseFilter.lower} />Only Lower
                    <input type = 'radio' name = 'case' id = 'upper' onChange ={this.props.caseFilter.upper} />Only Upper
                    <input type = 'radio' name = 'case' id = 'ignore' onChange ={this.props.caseFilter.ignore} />Ignore case
                </div>
            </div>
        );
    }
}

export default charFrequencyCheckBox;