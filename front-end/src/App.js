import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import GetPins from './components/getPins'
import GetOnePin from './components/getOnePin'
import NavBar from './components/NavBar'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { MasonryPage } from './components/MasonryPage';

library.add(fab, fas)

class App extends Component {
  render() {
    return (
      <NavBar></NavBar>
    );
  }
}

export default App;