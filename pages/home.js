import React, { Component } from 'react';
import SelectFile from '../components/selectFile';
import '../css/selectFile.css';
import '../css/fileData.css';
import '../css/component.css';

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
        if(this.state.fileData == ''){
            return (
                <div className = 'component'>
                    <div className='selectFileContainer'>
                        <SelectFile className='selectFileBtn' sendFileData={this.getFileData}/>
                    </div>
                </div>
            );
        }
        return (
            <div className = 'component'>
                <div className='selectFileContainer'>
                    <SelectFile className='selectFileBtn' sendFileData={this.getFileData}/>
                </div>
                <p className='fileData'>{this.state.fileData.substr(0,2000)}...</p>
            </div>
        );
    }
}

export default Home;