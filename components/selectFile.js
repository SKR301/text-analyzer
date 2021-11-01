import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SelectFile extends Component {

    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
            const text = (e.target.result);
            this.setState({fileData: text});
            console.log(this.state.fileData);
        };
        reader.readAsText(e.target.files[0])
    }

    render = () => {
        return (
            <div>
                <input type="file" onChange={(e) => this.showFile(e)} />
            </div>
        );
    }
}

export default SelectFile;