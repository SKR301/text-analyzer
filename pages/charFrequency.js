import React, { Component } from 'react';
import BarChart from '../components/barChart';
import CharFrequencyCheckBox from '../components/charFrequencyCheckBox';

class charFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: this.props.location.state.fileData, charFreq: ''};
        this.getcharFreq = this.getcharFreq.bind(this);
        this.changeCharFreq = this.changeCharFreq.bind(this);
    }

    componentDidMount = () => {
        this.changeCharFreq(this.getcharFreq(this.state.fileData.replace(/\s/g, '')));
    }

    // componentDidUpdate = () => {
    //     console.log("update");
    // }

    getcharFreq(string){
        var charFreq = new Map();
        string.split('').forEach(function(ch) {
            charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
        });

        return charFreq;
    }

    changeCharFreq(charFreq){
        this.state.charFreq = charFreq;
        new BarChart().plotChart(charFreq);
    }

    render = () => {
        const alpha=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            this.changeCharFreq(this.getcharFreq(str.join('')));
        }
        const alphanum=()=>{
            document.getElementById('none').checked = true;
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z0-9]/.test(char));
            this.changeCharFreq(this.getcharFreq(str.join('')));
        }
        const allchar=()=>{
            document.getElementById('none').checked = true;
            var str = this.state.fileData.replace(/\s/g, '');
            this.changeCharFreq(this.getcharFreq(str));
        }
        const lower=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-z]/.test(char));
                this.changeCharFreq(this.getcharFreq(str.join('')));
            } else {
                console.log('Only applicable for alpha');
                document.getElementById('lower').checked = false;
            }
        }
        const upper=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[A-Z]/.test(char));
                this.changeCharFreq(this.getcharFreq(str.join('')));
            } else {
                console.log('Only applicable for alpha');
                document.getElementById('upper').checked = false;
            }
        }
        const ignore=()=>{
            if(document.getElementById('alpha').checked){
                var alphaStr = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
                this.changeCharFreq(this.getcharFreq(alphaStr.join('').toLowerCase()));
            } else {
                console.log('Only applicable for alpha');
                document.getElementById('ignore').checked = false;
            }
        }
        const none=()=>{
            var str;
            if(document.getElementById('alpha').checked){
                str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            } else if(document.getElementById('alphanum').checked){
                str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z0-9]/.test(char));
            } else {
                str = this.state.fileData.replace(/\s/g, '').split('');
            }
            this.changeCharFreq(this.getcharFreq(str.join('')));
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
                <CharFrequencyCheckBox charFilter={{alpha, alphanum, allchar}} caseFilter={{lower,upper,ignore,none}} sort={{characters,count}} />
                <BarChart />
                <p>{this.state.fileData}</p>
            </div>
        );
    }
}

export default charFrequency;