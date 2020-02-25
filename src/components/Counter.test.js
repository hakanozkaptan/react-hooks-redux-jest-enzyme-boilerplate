import React from 'react';
import { mount, configure } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Counter } from 'components';
import { increaseCount } from 'actions';
import { counter } from 'reducers';

configure({ adapter: new EnzymeAdapter() });
/* eslint-disable no-undef */

describe('<Counter /> unit test', () => {
  const getWrapper = (mockStore = createStore(counter, { count: 0 })) =>
    mount(
      <Provider store={mockStore}>
        <Counter />
      </Provider>
    );

  test('should add to count and display the correct # of counts', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h3').text()).toEqual('Count: 0');
    wrapper
      .find('#increase')
      .hostNodes()
      .simulate('click');
    expect(wrapper.find('h3').text()).toEqual('Count: 1');
  });

  test('should dispatch increase action on button click', () => {
    const mockStore = createStore(counter, { count: 0 });
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper
      .find('#increase')
      .hostNodes()
      .simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(increaseCount());
  });

  test('should decrease to count and display the correct # of counts', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h3').text()).toEqual('Count: 0');
    wrapper
      .find('#decrease')
      .hostNodes()
      .simulate('click');
    expect(wrapper.find('h3').text()).toEqual('Count: 0');
  });
});
