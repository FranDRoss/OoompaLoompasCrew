/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { browserHistory } from 'react-router-dom';

import { Provider } from 'react-redux';
import { HomePage } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
