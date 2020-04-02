import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Inserir from './Inserir';
import Editar from './Editar';
import Ver from './Ver';


export default class App extends React.Component{

  render(){
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/inserir'} className="nav-link">Inserir</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ver'} className="nav-link">Ver</Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>Criando CRUD Tutorial</h2><br/>

          <Switch>
            <Route exact path="/inserir" component={Inserir} />
            <Route path="/editar/:id" component={Editar}/>
            <Route path="/ver" component={Ver}/>
          </Switch>

        </div>
      </Router>
    );
  }

}

