import React from 'react';
import styles from './App.module.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header/header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/home';
import Team from './Pages/team';
import Services from './Pages/services';
import Apply from './Pages/apply';
import Contacts from './Pages/contact';
import { LangProvider } from './Context/MainContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <LangProvider>
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
              <Route exact path="/contact">
                <Contacts />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </LangProvider>
    </>
  );
};
export default App;
