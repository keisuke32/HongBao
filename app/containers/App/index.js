/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Lottery from '../FeaturePage/Lottery';

import GlobalStyle from '../../global-styles';

import Background from '../../images/background.png';
import BackgroundMobile from '../../images/background-mobile.png';

const AppWrapper = styled.div`
  width: 100%;
  background-color: #DC443F;
  background-image: url(${Background});
  background-size: 100% auto;
  @media only screen and (max-width: 768px) {
    background-image: url(${BackgroundMobile});
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/lottery" component={Lottery} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
