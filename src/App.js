import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Weekly from './components/Weekly.jsx';
import WeeklyBattle from './components/WeeklyBattle.jsx';
import Popular from './components/Popular.jsx';
import PopularBattle from './components/PopularBattle.jsx';
import Favorites from './components/Favorites.jsx';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter> 
        <div className="my-5">
          <nav > 
            <ul className="nav">
              <li className="nav-item"><Link className="nav-link active text-light" to="/">Home</Link></li> 
              <li className="nav-item"><Link className="nav-link active text-light" to="/weekly">This week</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/weekly-battle">This week Battle</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/popular">Popular</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/popular-battle">Popular Battle</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/favorites">My List</Link></li>
            </ul>
          </nav>

          <Switch> 
            <Route exact path="/" />
            <Route  path="/weekly" component={Weekly}/>
            <Route  path="/weekly-battle" component={WeeklyBattle}/>
            <Route  path="/popular" component={Popular}/>
            <Route  path="/popular-battle" component={PopularBattle}/>
            <Route  path="/favorites" component={Favorites}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
