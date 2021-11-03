import React, { Component } from 'react';
import BarChart from '../components/barChart';

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
        this.getCharFrequency = this.getCharFrequency.bind();
    }

    componentDidMount = () => {
        var charFrequency = this.getCharFrequency(this.state.fileData.replace(/\s/g, ''));
        new BarChart().plotChart(charFrequency);
    }

    getCharFrequency(string){
        var charFrequency = new Map();
        string.split('').forEach(function(ch) {
            charFrequency.has(ch) ? charFrequency.set(ch, charFrequency.get(ch)+1) : charFrequency.set(ch, 1) ;
        });

        return charFrequency;
    }

    // componentDidUpdate = () => {
    //     console.log("update");
    // }


    render = () => {
        return (
            <div>
                <h1>Single char frequency</h1>
                <BarChart />
            </div>
        );
    }
}

export default SingleCharFrequency;