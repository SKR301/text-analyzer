import React, { Component } from 'react';
import VowelConsonantCheckBox from '../components/vowelConsonantCheckBox';
import PieChart from '../components/pieChart';

class VowelVSConsonant extends Component {
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
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
            document.getElementById('ignore').checked = true;
        }
    }
    
    componentDidUpdate = () => {
        new PieChart().plotChart(this.state.charFreq);
    }

    getCharFreq(string){
        var charFreq = new Map();
        charFreq.set('vowel', string.match(/[aeiou]/gi).length);
        charFreq.set('consonant', string.length - string.match(/[aeiou]/gi).length);
        console.log(charFreq);
        return charFreq;
    }

    render = () => {
        const lower=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
        }
        const upper=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[A-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
        }
        const ignore=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join('').toLowerCase())});
        }
        if(this.state.fileData == ''){
            return (
                <div>
                    <h1>Vowel VS Consonant</h1>
                    <p>No file selected...</p><p>Go To Home to select file</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Vowel VS Consonant</h1>
                    <VowelConsonantCheckBox caseFilter={{lower,upper,ignore}} />
                    <PieChart />
                    <p>{this.state.fileData}</p>
                </div>
            );
        }
    }
}

export default VowelVSConsonant;