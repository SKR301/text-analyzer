import React, { Component } from 'react';

class SelectFile extends Component {
    constructor(props) {
        super(props);
    }

    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
            var text = (e.target.result);
            this.props.sendFileData(text);

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