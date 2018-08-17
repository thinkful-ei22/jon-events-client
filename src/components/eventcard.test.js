import React from 'react';
import { shallow } from 'enzyme';

import EventCard from './eventcard';

describe('<EventCard/>', () => {
  it('Renders without crashing', () => {
    shallow(<EventCard />);
  });
});