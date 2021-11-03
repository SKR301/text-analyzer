import React, { Component } from 'react';
import SelectFile from '../components/selectFile';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    _getFileData = (data) => {
        this.setState({fileData: data});
        console.log(data);

    }

    render = () => {
        return (
            <div>
                <SelectFile sendFileData={this._getFileData}/>
            </div>
        );
    }
}

export default Home;