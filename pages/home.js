import React, { Component } from 'react';
import SelectFile from '../components/selectFile';
import { Redirect, useHistory } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData : ''};
        this.getFileData = this.getFileData.bind();
    }

    getFileData = (data) => {
        this.setState({fileData: data});
    }

    render = () => {
        if(this.state.fileData != ''){
            return (
                <Redirect to={{
                    pathname: '/charFrequency',
                    state: { fileData: this.state.fileData }
                }} />
            );
        }
        
        return (
            <div>
                <SelectFile sendFileData={this.getFileData}/>
            </div>
        );
    }
}

export default Home;