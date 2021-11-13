import React, { Component } from 'react';
import BarChart from '../components/barChart';
import CharFrequencyCheckBox from '../components/charFrequencyCheckBox';
import '../css/component.css';
import '../css/fileData.css';
import '../css/pages.css';

class charFrequency extends Component {
    constructor(props) {
        super(props);
        if(this.props.history.location.data == undefined){
            this.state = {fileData: '', charFreq: ''};
        } else {
            this.state = {fileData: this.props.history.location.data.fileData, charFreq: '', fileDataDsiplay: true};
        }
        this.getCharFreq = this.getCharFreq.bind(this);
    }

    componentDidMount = () => {
        if(this.state.fileData != ''){
            var str = this.state.fileData.replace(/\s/g, '');
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str)});
            document.getElementById('none').checked = true;
            document.getElementById('allchar').checked = true;
        }
    }

    componentDidUpdate = () => {
        new BarChart().plotChart(this.state.charFreq);
    }

    getCharFreq(string){
        var charFreq = new Map();
        string.split('').forEach(function(ch) {
            charFreq.has(ch) ? charFreq.set(ch, charFreq.get(ch)+1) : charFreq.set(ch, 1) ;
        });

        return charFreq;
    }

    render = () => {
        const alpha=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
            document.getElementById('character').checked = false;
            document.getElementById('count').checked = false;
        }
        const alphanum=()=>{
            var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z0-9]/.test(char));
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
            document.getElementById('character').checked = false;
            document.getElementById('count').checked = false;
            document.getElementById('none').checked = true;
        }
        const allchar=()=>{
            var str = this.state.fileData.replace(/\s/g, '');
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str)});
            document.getElementById('none').checked = true;
            document.getElementById('character').checked = false;
            document.getElementById('count').checked = false;
        }
        const lower=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-z]/.test(char));
                this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
                document.getElementById('character').checked = false;
                document.getElementById('count').checked = false;
            } else {
                alert('Only applicable for Character Filer: "Only Alphabets"');
                document.getElementById('lower').checked = false;
            }
        }
        const upper=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[A-Z]/.test(char));
                this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
                document.getElementById('character').checked = false;
                document.getElementById('count').checked = false;
            } else {
                alert('Only applicable for Character Filer: "Only Alphabets"');
                document.getElementById('upper').checked = false;
            }
        }
        const ignore=()=>{
            if(document.getElementById('alpha').checked){
                var str = this.state.fileData.replace(/\s/g, '').split('').filter(char => /[a-zA-Z]/.test(char));
                this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join('').toLowerCase())});
                document.getElementById('character').checked = false;
                document.getElementById('count').checked = false;
            } else {
                alert('Only applicable for Character Filer: "Only Alphabets"');
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
            this.setState({fileData: this.state.fileData, charFreq: this.getCharFreq(str.join(''))});
        }
        const characters=()=>{
            this.setState({fileData: this.state.fileData, charFreq: new Map([...this.state.charFreq.entries()].sort())});
        }
        const count=()=>{
            this.setState({fileData: this.state.fileData, charFreq: new Map([...this.state.charFreq.entries()].sort((a, b) => b[1] - a[1]))});
        }
        const toggleFileDataDisplay=()=>{
            if(this.state.fileDataDsiplay){
                document.getElementById('fileDataDisplay').style.display = 'none';
                document.getElementById('fileDataToggleBtn').innerHTML = 'Show File Data';
                this.state.fileDataDsiplay = false;
            } else {
                document.getElementById('fileDataDisplay').style.display = 'block'
                document.getElementById('fileDataToggleBtn').innerHTML = 'Hide File Data';
                this.state.fileDataDsiplay = true;
            }
        }

        if(this.state.fileData == ''){
            return (
                <div className = 'component'>
                    <h1 className='heading'>Character frequency</h1>
                    <center><p>No file selected...</p><p>Go To Home to select file</p></center>
                </div>
            );
        } else {
            return (
                <div className = 'component'>
                    <h1 className='heading'>Character frequency</h1>
                    <CharFrequencyCheckBox charFilter={{alpha, alphanum, allchar}} caseFilter={{lower,upper,ignore,none}} sort={{characters,count}} />
                    <BarChart/>
                    <button id='fileDataToggleBtn' onClick={toggleFileDataDisplay}>Hide File Data</button>
                    <p id='fileDataDisplay' className='fileData'>{this.state.fileData}</p>
                </div>
            );
        }
    }
}

export default charFrequency;