import React, {Component} from 'react';
import CharFrequency from './pages/charFrequency';
import DoubleCharFrequency from './pages/PairFrequency';
import VowelVSConsonant from './pages/vowelVSconsonant';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './css/navbar.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
        this.getFileData = this.getFileData.bind(this);
    }

    getFileData = (data) => {
        this.setState({fileData: data});
    }

    render = () => {
        return (
            <Router>
                <div>
                    <ul className='navbarContainer'> 
                        <li className='nav-link'><Link className='link-text'  to={{ pathname: '/home', data: {sendFileData: this.getFileData} }}>Home</Link></li>
                        <li className='nav-link'><Link className='link-text'  to={{ pathname: '/charFrequency', data: {fileData: this.state.fileData} }}>Character Frequency</Link></li>
                        <li className='nav-link'><Link className='link-text' to={{ pathname: '/pairFrequency', data: {fileData: this.state.fileData} }}>Pair Frequency</Link></li>
                        <li className='nav-link'><Link className='link-text' to={{ pathname: '/vowelVSconsonant', data: {fileData: this.state.fileData} }}>Vowel-Consonant</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path='/charFrequency' component={CharFrequency}/>
                    <Route path='/pairFrequency' component={DoubleCharFrequency}/>
                    <Route path='/vowelVSConsonant' component={VowelVSConsonant}/>
                </Switch>
            </Router>
        );
    }
}

export default App;