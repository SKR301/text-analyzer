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
    }

    render = () => {
        // if(this.state.fileData != ''){
        //     // return (
        //     //     <Redirect to={{
        //     //         pathname: '/charFrequency',
        //     //         state: { fileData: this.state.fileData }
        //     //     }} />
        //     // );
        // }

        return (
            <Router>
                <div>
                    <ul className='container'> 
                        {/* <li><Link className='link'  to = '/home' >Home</Link></li> */}
                        <li><Link className='link'  to={{ pathname: '/home', state: { fileData: 'bar'} }} >Home</Link></li>
                        <li><Link className='link' to = '/charFrequency'>Character Frequency</Link></li>
                        <li><Link className='link' to = '/doubleCharFrequency'>Pair Frequency</Link></li>
                        <li><Link className='link' to = '/vowelVSConsonant'>Vowel-Consonant</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path='/charFrequency' component={CharFrequency}/>
                    <Route path='/doubleCharFrequency' component={DoubleCharFrequency}/>
                    <Route path='/vowelVSConsonant' component={VowelVSConsonant}/>
                </Switch>
            </Router>
        );
    }
}

export default App;