import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
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
            {/* <NavBar /> */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/radio" component={RadioPage} />
              <Route path="/records" component={RecordsPage} />
              <Route path="/presents" component={PresentsPage} />
              <Route path="/home" component={HomePage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
