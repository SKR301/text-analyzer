import React, { Component } from 'react';

class charFrequencyCheckBox extends Component {
    constructor(props){
        super(props);
    }

    render = () => {
        return (
            <div>
                <b>Character Filter:</b>
                <div id = 'characters'>
                    <input type = 'radio' name = 'characters' id = 'alpha' onChange ={this.props.charFilter.alpha} />Only Alphabets
                    <input type = 'radio' name = 'characters' id = 'alphanum' onChange ={this.props.charFilter.alphanum} />Alphabets+Digits
                    <input type = 'radio' name = 'characters' id = 'allchar' onChange ={this.props.charFilter.allchar} />All
                </div>
                <b>Case Filter:</b>
                <div id = 'case'>
                    <input type = 'radio' name = 'case' id = 'lower' onChange ={this.props.caseFilter.lower} />Only Lower
                    <input type = 'radio' name = 'case' id = 'upper' onChange ={this.props.caseFilter.upper} />Only Upper
                    <input type = 'radio' name = 'case' id = 'ignore' onChange ={this.props.caseFilter.ignore} />Ignore case
                </div>
                <b>Sort By:</b>
                <div id = 'sort'>
                    <input type = 'radio' name = 'sort' id = 'characters' onChange ={this.props.sort.characters} />Characters
                    <input type = 'radio' name = 'sort' id = 'count' onChange ={this.props.sort.count} />Count
                </div>
            </div>
        );
    }
}

export default charFrequencyCheckBox;