import React, { Component } from 'react';
import Select from 'react-select'

class charFrequencyCheckBox extends Component {
    constructor(props){
        super(props);
    }

    render = () => {
        const getAlphabetsOption=()=>{
            var alphabetArr = [];
            for(var ch=65;ch<91;ch++){
                alphabetArr.push({value: String.fromCharCode(ch), label: String.fromCharCode(ch)});
            }
            return alphabetArr;
        }
        return (
            <div>
                <b>Character Filter:</b>
                <div id = 'characters'>
                    <input type = 'radio' name = 'characters' id = 'firstChar' onChange ={this.props.charFilter.first}/>First Character
                    <input type = 'radio' name = 'characters' id = 'none' onChange ={this.props.charFilter.none} />None
                </div>
                <Select id = 'firstCharSelect' options={getAlphabetsOption()} onChange={(opt)=>this.props.sendFirstChar(opt.value)}/>
            </div>
        );
    }
}

export default charFrequencyCheckBox;