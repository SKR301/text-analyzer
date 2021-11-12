import React, { Component } from 'react';
import BarChart from '../components/barChart';
import PairFrequencyCheckBox from '../components/pairFrequencyCheckBox';
import '../css/component.css';
import '../css/fileData.css';
import '../css/pages.css';

class pairFrequency extends Component {
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
            document.getElementById('firstCharSelect').style.visibility = 'hidden';
        }
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
            document.getElementById('count').checked = false;
            document.getElementById('characters').checked = false;
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
                this.state.fileDataDsiplay = false;
            } else {
                document.getElementById('fileDataDisplay').style.display = 'block'
                this.state.fileDataDsiplay = true;
            }
        }
        if(this.state.fileData == ''){
            return (
                <div className = 'component'>
                    <h1 className='heading'>Pair frequency</h1>
                    <center><p>No file selected...</p><p>Go To Home to select file</p></center>
                </div>
            );
        } else {
            return (
                <div className = 'component'>
                    <h1 className='heading'>Pair frequency</h1>
                    <PairFrequencyCheckBox charFilter={{first, none}} sort={{characters, count}} sendFirstChar={getFirstChar}/>
                    <BarChart />
                    <button onClick={toggleFileDataDisplay}>Show File Data</button>
                    <p id='fileDataDisplay' className='fileData'>{this.state.fileData}</p>
                </div>
            );
        }
    }
}

export default pairFrequency;