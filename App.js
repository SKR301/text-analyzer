import React, {Component} from 'react';
import SingleCharFrequency from './pages/singleCharFrequency';
import DoubleCharFrequency from './pages/doubleCharFrequency';
import VowelVSConsonant from './pages/vowelVSconsonant';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './css/navbar.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    getFileData = (data) => {
        this.setState({fileData: data});
        console.log(this.state.fileData);
        return <Redirect to="/singleCharFreq"/>
    }

    render = () => {
        return (
            <Router>
                <div>
                    <ul className='container'> 
                        <li><Link className='link'  to = '/home'>Home</Link></li>
                        <li><Link className='link' to = '/singleCharFrequency'>Single Character</Link></li>
                        <li><Link className='link' to = '/doubleCharFrequency'>Double Character</Link></li>
                        <li><Link className='link' to = '/vowelVSConsonant'>Vowel-Consonant</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path='/singleCharFrequency' component={SingleCharFrequency}/>
                    <Route path='/doubleCharFrequency' component={DoubleCharFrequency}/>
                    <Route path='/vowelVSConsonant' component={VowelVSConsonant}/>
                </Switch>
            </Router>
        );
    }
}

export default App;