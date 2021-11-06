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
        this.getcharFreq = this.getcharFreq.bind(this);
    }

    componentDidMount = () => {
        this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(this.state.fileData.replace(/\s/g, ''))});
    }
    
    componentDidUpdate = () => {
        new PieChart().plotChart(this.state.charFreq);
        // console.log(this.state.charFreq)
    }

    getcharFreq(string){
        // TODO filter by alpha and then vowel/consonant
        var charFreq = new Map();
        string.split('').forEach(function(ch) {
            charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
        });

        return charFreq;
    }

    render = () => {
        const lower=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
        }
        const upper=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[A-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
        }
        const ignore=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join('').toLowerCase())});
        }
        return (
            <div>
                <h1>Vowel VS Consonant</h1>
                <VowelConsonantCheckBox caseFilter={{lower,upper,ignore}} />
                <PieChart />
            </div>
        );
    }
}

export default VowelVSConsonant;