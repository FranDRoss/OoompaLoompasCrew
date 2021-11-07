/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from 'react-testing-library';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const { queryByText } = render(<NotFound />);
    expect(queryByText('Hey').not.toBeNull());
  });
});
