import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import DeliPage from './containers/DeliPage/DeliPage';
import FishingPage from './containers/FishingPage/FishingPage';
import StoryPage from './containers/StoryPage/StoryPage';
import BoatsPage from './containers/BoatsPage/BoatsPage';
import AppBar from './containers/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import withTracker from './components/withTracker';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <AppBar />
        <Route path="/deli" component={withTracker(DeliPage)} />
        <Route path="/products" component={withTracker(ProductsPage)} />
        <Route path="/story" component={withTracker(StoryPage)} />
        <Route path="/boats" component={withTracker(BoatsPage)} />
        <Route path="/fishing" component={withTracker(FishingPage)} />
        <Route exact path="/" component={withTracker(HomePage)} />


        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
