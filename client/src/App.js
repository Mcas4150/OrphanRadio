import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";
import Footer from "./components/layout/Footer";
import NavMenu from "./components/layout/NavMenu";
import AdminPage from "./pages/admin/AdminPage";

import Example from "./pages/home/cursor";

import RosterPage from "./pages/roster/RosterPage";
import RecordsPage from "./pages/records/RecordsPage";
import RetailPage from "./pages/retail/RetailPage";
import RagersPage from "./pages/ragers/RagersPage";
import HomePage from "./pages/home/HomePage";
import store from "./store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

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
            <Route
              render={location => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <Switch>
                      <Route exact path="/" component={HomePage} />

                      <Route path="/records/" component={RecordsPage} />

                    

                      <Route path="/retail/" component={RetailPage} />
                      <Route path="/ragers/" component={RagersPage} />
                      <Route path="/home" component={HomePage} />
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

            <ReactCursorPosition
              activationInteractionMouse={INTERACTIONS.HOVER}
              mapChildProps={({
                elementDimensions,
                isActive,
                isPositionOutside,
                position
              }) => {
                return {
                  elementDimensions,
                  isActive,
                  isOutside: isPositionOutside,
                  point: position
                };
              }} //default
              // hoverDelayInMs={250} //default: 0
              // hoverOffDelayInMs={150} //default: 0
            >
              <NavMenu />
            </ReactCursorPosition>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
