/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavBar from '../Components/navbar';
import Home from '../Pages/home';
import About from '../Pages/about';
import Contact from '../Pages/contact';
import { Footer } from '../Components/footer';
import Services from '../Pages/services';

export default function App() {
  return (
    <div>
      <CustomNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
