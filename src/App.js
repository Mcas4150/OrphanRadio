import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/home/HomePage";
import RadioPage from "./pages/radio/RadioPage";
import RecordsPage from "./pages/records/RecordsPage";
import PresentsPage from "./pages/presents/PresentsPage";
import store from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div className="main">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/radio" component={RadioPage} />
              <Route exact path="/records" component={RecordsPage} />
              <Route exact path="/presents" component={PresentsPage} />
              <Route exact path="/home" component={HomePage} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
