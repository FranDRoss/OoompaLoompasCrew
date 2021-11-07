import React from 'react';
import { render } from 'react-testing-library';

import FeaturePage from '../index';

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(<FeaturePage />);

    expect(firstChild).toMatchSnapshot();
  });
});
