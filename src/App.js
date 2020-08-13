import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={withRouter(About)} />
        <Route exact path="/portfolio" component={withRouter(Portfolio)} />
        <Route exact path="/contact" component={withRouter(Contact)} />
      </Switch>
    </Router>
  );
}

export default App;
