import React from "react";
import styles from "./App.module.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Team from "./pages/team";
import Services from "./pages/services";
import Apply from "./pages/apply";
// import Contacts from "./pages/contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <div className={styles.mainDiv}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/apply">
              <Apply />
            </Route>
            {/* <Route exact path="/contact">
              <Contacts />
            </Route> */}
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};
export default App;
