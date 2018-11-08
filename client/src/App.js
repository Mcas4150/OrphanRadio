import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import posed, { PoseGroup } from "react-pose";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AdminPage from "./pages/admin/AdminPage";
import HomePage from "./pages/home/HomePage";
import Example from "./pages/home/cursor";
import BackgroundContainer from "./components/backgroundContainer";
import RadioPage from "./pages/radio/RadioPage";
import RecordsPage from "./pages/records/RecordsPage";
import PresentsPage from "./pages/presents/PresentsPage";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <NavBar /> */}
            <Route
              render={location => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <Switch>
                      <Route exact path="/" component={BackgroundContainer} />
                      <Route path="/radio" component={RadioPage} />
                      <Route path="/records" component={RecordsPage} />
                      <Route path="/presents" component={PresentsPage} />
                      <Route path="/home" component={BackgroundContainer} />
                      <Route path="/cursor" component={Example} />
                      <Route path="/login" component={Login} />
                      <Route path="/register" component={Register} />
                      <Route path="/admin" component={AdminPage} />

                      {/* <PrivateRoute path="/admin" component={AdminPage} /> */}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
