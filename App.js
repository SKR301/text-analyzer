import React, {Component} from 'react';
import SelectFile from './components/selectFile';
import SingleCharFrequency from './components/singleCharFrequency';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    getFileData = (data) => {
        this.setState({fileData: data});
    }

    render = () => {
        return (
            <div>
                <SelectFile sendFileData = {this.getFileData}/>
                <SingleCharFrequency fileData = {this.state.fileData}/>
            </div>
            
        );
    }
}

export default App;