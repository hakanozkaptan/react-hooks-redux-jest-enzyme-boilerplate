import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NotFound } from 'pages';

configure({ adapter: new Adapter() });
/* eslint-disable no-undef */

describe('<NotFound /> unit test', () => {
  test('renders without crashing', () => {
    expect(shallow(<NotFound />));
  });

  test('render not found value', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.contains('404 page not found :(')).toEqual(true);
  });

  test('has a 404 value', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.text()).toEqual('404 page not found :(Return to Home');
  });
});
