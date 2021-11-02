import React, {Component} from 'react';
import SelectFile from './components/selectFile';
import SingleCharFrequency from './components/singleCharFrequency';
import DoubleCharFrequency from './pages/doubleCharFrequency';
import VowelVSConsonant from './pages/vowelVSconsonant';
import { Route, Link, BrowserRouter, Redirect } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    getFileData = (data) => {
        this.setState({fileData: data});
        console.log(this.state.fileData);
        return <Redirect to="/singleCharFreq"/>
    }

    render = () => {
        return (
            // <div>
            //     <SelectFile sendFileData = {this.getFileData}/>
            //     <SingleCharFrequency fileData = {this.state.fileData}/>
            // </div>
            < BrowserRouter >
                <div>
                    {/* <Route exact path="/" component={SelectFile} sendFileData ={this.getFileData}/> */}
                    <Route exact path="/" component = {() => (<SelectFile sendFileData ={this.getFileData}/>)}/>
                    <Route path="/singleCharFreq" component={SingleCharFrequency} fileData = {this.state.fileData}/>
                    <Route path="/doubleCharFreq" component={DoubleCharFrequency}/>
                    <Route path="/VowelVSConsonant" component={VowelVSConsonant}/>
                </div>
         </ BrowserRouter >
        );
    }
}

export default App;