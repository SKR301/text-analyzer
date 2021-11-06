import React, { Component } from 'react';
import BarChart from '../components/barChart';
import PairFrequencyCheckBox from '../components/pairFrequencyCheckBox';

class pairFrequency extends Component {
    constructor(props) {
        super(props);
        if(this.props.history.location.data == undefined){
            this.state = {fileData: '', charFreq: ''};
        } else {
            this.state = {fileData: this.props.history.location.data.fileData, charFreq: ''};
        }
        this.getCharFreq = this.getCharFreq.bind(this);
    }

    componentDidMount = () => {
        if(this.state.fileData != ''){
            var str = this.state.fileData.replace(/\s/g, '');
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str)});
        }
        document.getElementById('none').checked = true;
        document.getElementById('firstCharSelect').style.visibility = 'hidden';
    }

    componentDidUpdate = () => {
        new BarChart().plotChart(this.state.charFreq);
    }

    getCharFreq(string, keyChar){
        var charFreq = new Map();
        string= string.toUpperCase();

        if(keyChar == undefined){
            for(var a=0;a<string.length-1;a++){
                var ch = string[a]+string[a+1];
                charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
            }
        } else {
            for(var a=0;a<string.length-1;a++){
                if(string[a] == keyChar){
                    var ch = string[a]+string[a+1];
                    charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
                }
            }
        }

        return charFreq;
    }

    render = () => {
        const first=()=>{
            document.getElementById('firstCharSelect').style.visibility = 'visible';
        }
        const none=()=>{
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(this.state.fileData)});
            document.getElementById('firstCharSelect').style.visibility = 'hidden';
        }
        const getFirstChar=(firstChar)=>{
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(this.state.fileData, firstChar)});
        }

        return (
            <div>
                <h1>Character frequency</h1>
                <PairFrequencyCheckBox charFilter={{first, none}} sendFirstChar={getFirstChar}/>
                <BarChart />
                <p>{this.state.fileData}</p>
            </div>
        );
    }
}

export default pairFrequency;