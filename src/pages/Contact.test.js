import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Contact } from 'pages';

configure({ adapter: new Adapter() });
/* eslint-disable no-undef */

describe('<NotFound /> unit test', () => {
  test('renders without crashing', () => {
    expect(shallow(<Contact />));
  });

  test('render not found value', () => {
    const wrapper = shallow(<Contact />);

    expect(wrapper.contains('Welcome to my boilerplate')).toEqual(true);
  });

  test('has a 404 value', () => {
    const wrapper = shallow(<Contact />);

    expect(wrapper.text()).toEqual('Welcome to my boilerplateReturn to Home');
  });
});
