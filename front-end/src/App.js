import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import pinterest from './indice.png'
import GetPins from './components/getPins'
import GetOnePin from './components/getOnePin'
import { MasonryPage } from './components/MasonryPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <div>
            <Link to={'/'}><img className="pinterest" src={pinterest} /></Link>
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/test'}>Layout</Link>
                </li>
                <li>
                  <Link to={'/get/pins'}>Index</Link>
                </li>
              </ul>
              <h1>Pinterest</h1>
            </div>
          </nav>
          <Switch>
              <Route exact path='/' render={() => <Welcome/> } />
              <Route exact path='/get/pins' render={() => <GetPins/> } />
              <Route exact path='/get/pins/:id' component={ GetOnePin } />
              <Route exact path='/test' render={() => <MasonryPage/> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const Welcome = () => {
  return (
    <h1>WELCOMEEE!!!</h1>
  )
}