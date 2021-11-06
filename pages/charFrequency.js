import React, { Component } from 'react';
import BarChart from '../components/barChart';
import CharFrequencyCheckBox from '../components/charFrequencyCheckBox';

class charFrequency extends Component {
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
        document.getElementById('none').checked = true;
        document.getElementById('allchar').checked = true;
    }

    componentDidUpdate = () => {
        new BarChart().plotChart(this.state.charFreq);
    }

    getcharFreq(string){
        var charFreq = new Map();
        string.split('').forEach(function(ch) {
            charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
        });

        return charFreq;
    }

    render = () => {
        const alpha=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
            document.getElementById('characters').checked = false;
            document.getElementById('count').checked = false;
        }
        const alphanum=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z0-9]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
            document.getElementById('characters').checked = false;
            document.getElementById('count').checked = false;
            document.getElementById('none').checked = true;
        }
        const allchar=()=>{
            var str = this.state.fileData.replace(/\s/g, '');
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str)});
            document.getElementById('none').checked = true;
            document.getElementById('characters').checked = false;
            document.getElementById('count').checked = false;
        }
        const lower=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-z]/.test(char));
                this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
                document.getElementById('characters').checked = false;
                document.getElementById('count').checked = false;
            } else {
                console.log('Only applicable for alpha');
                document.getElementById('lower').checked = false;
            }
        }
        const upper=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[A-Z]/.test(char));
                this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
                document.getElementById('characters').checked = false;
                document.getElementById('count').checked = false;
            } else {
                console.log('Only applicable for alpha');
                document.getElementById('upper').checked = false;
            }
        }
        const ignore=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
                this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join('').toLowerCase())});
                document.getElementById('characters').checked = false;
                document.getElementById('count').checked = false;
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
            this.setState({fileData: this.state.fileData, charFreq: this.getcharFreq(str.join(''))});
        }
        const characters=()=>{
            this.setState({fileData: this.state.fileData, charFreq: new Map([...this.state.charFreq.entries()].sort())});
        }
        const count=()=>{
            this.setState({fileData: this.state.fileData, charFreq: new Map([...this.state.charFreq.entries()].sort((a, b) => b[1] - a[1]))});
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