/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  padding: 0 16px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Oompa Loompa's Crew"
        defaultTitle="Oompa Loompa's Crew"
      >
        <meta name="description" content="A Oompa Loompa's Crew application" />
      </Helmet>
      <Header />
      <BodyWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BodyWrapper>
      <GlobalStyle />
    </AppWrapper>
  );
}
