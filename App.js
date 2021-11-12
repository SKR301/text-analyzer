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
            <Router className='App'>
                <div>
                    <ul className='navbarContainer'> 
                        <li className='nav-link'>
                            <Link to={{ pathname: '/home', data: {sendFileData: this.getFileData} }}>
                                <p className='link-text '>Home</p>
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link to={{ pathname: '/charFrequency', data: {fileData: this.state.fileData} }}>
                                <p className='link-text'>Char Frequency</p>
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link to={{ pathname: '/pairFrequency', data: {fileData: this.state.fileData} }}>
                                <p className='link-text'>Pair Frequency</p>
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link to={{ pathname: '/vowelVSconsonant', data: {fileData: this.state.fileData} }}>
                                <p className='link-text'>Vowel - Consonant</p>
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link to={{ pathname: '/vowelVSconsonant', data: {fileData: this.state.fileData} }}>
                                <p className='link-text'>Vowel - Consonant</p>
                            </Link>
                        </li>
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