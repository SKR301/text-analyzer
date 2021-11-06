import React, { Component } from 'react';
import SelectFile from '../components/selectFile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData : ''};
        this.getFileData = this.getFileData.bind();
        this.sendFileData = this.props.history.location.data.sendFileData.bind(this);
    }

    getFileData = (data) => {
        this.setState({fileData: data});
        this.sendFileData(data);
    }

    render = () => {
        return (
            <div>
                <SelectFile sendFileData={this.getFileData}/>
                <p>{this.state.fileData}</p>
            </div>
        );
    }
}

export default Home;