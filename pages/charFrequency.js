import React, { Component, useState } from 'react';
import BarChart from '../components/barChart';
import CharFrequencyCheckBox from '../components/charFrequencyCheckBox';

class charFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
        this.getcharFreq = this.getcharFreq.bind(this);
    }

    componentDidMount = () => {
        var charFreq = this.getcharFreq(this.state.fileData.replace(/\s/g, ''));
        new BarChart().plotChart(charFreq);
    }

    getcharFreq(string){
        var charFreq = new Map();
        string.split('').forEach(function(ch) {
            charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
        });

        return charFreq;
    }

    componentDidUpdate = () => {
        console.log("update");
    }
    render = () => {
        const alpha=()=>{
            console.log("alpha");
        }
        const alphanum=()=>{
            console.log("alphanum");
        }
        const allchar=()=>{
            console.log("allchar");
        }
        const lower=()=>{
            console.log("lower");
        }
        const upper=()=>{
            console.log("upper");
        }
        const ignore=()=>{
            console.log("ignore");
        }
        const characters=()=>{
            console.log("characters");
        }
        const count=()=>{
            console.log("count");
        }
        
        return (
            <div>
                <h1>Character frequency</h1>
                <CharFrequencyCheckBox charFilter={{alpha, alphanum, allchar}} caseFilter={{lower,upper,ignore}} sort={{characters,count}} />
                <BarChart />
                <p>{this.state.fileData}</p>
            </div>
        );
    }
}

export default charFrequency;