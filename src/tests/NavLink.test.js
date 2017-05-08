import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { NavLink } from '../node_modules/';


describe('<NavLink />', () => {

  const wrapper = mount(
    <NavLink
      className="test-class"
      to="/test"
    >
      test link
    </NavLink>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavLink />, div);
  });

  it('should have a to prop', () => {
    expect(wrapper.props().to).not.toEqual(null);
    expect(wrapper.props().to).not.toEqual(undefined);
    expect(wrapper.props().to).not.toEqual('');
    expect(wrapper.props().to).toEqual('/test');
  });

  it('should add extra given props', () => {
    expect(wrapper.find('.test-class')).not.toEqual(null);
    expect(wrapper.find('.test-class')).not.toEqual(undefined);
    expect(wrapper.find('.test-class').length).not.toEqual(0);
    expect(wrapper.find('.test-class').length).toEqual(1);
  });

  it('should add the children into the UI', () => {
    expect(wrapper.find('.test-class').text()).not.toEqual(null);
    expect(wrapper.find('.test-class').text()).not.toEqual(undefined);
    expect(wrapper.find('.test-class').text()).not.toEqual('');
    expect(wrapper.find('.test-class').text()).toEqual('test link');
  });

});
