import React, { Component } from 'react';
import SelectFile from '../components/selectFile';
import '../css/selectFile.css';

class Home extends Component {
    constructor(props) {
        super(props);
        if(this.props.history.location.data === undefined){
            window.location.href = '/'; 
        } else {
            this.sendFileData = this.props.history.location.data.sendFileData.bind(this);
        }
        this.state = {fileData : ''};
        this.getFileData = this.getFileData.bind();
    }

    getFileData = (data) => {
        this.setState({fileData: data});
        this.sendFileData(data);
    }

    render = () => {
        return (
            <div className = 'selectFileBtn'>
                <SelectFile sendFileData={this.getFileData}/>
                <p>{this.state.fileData}</p>
            </div>
        );
    }
}

export default Home;