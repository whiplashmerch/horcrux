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
    const prop = wrapper.props().to;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('/test');
  });

  it('should add extra given props', () => {
    const selector = wrapper.find('.test-class');
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector.length).not.toEqual(0);
    expect(selector.length).toEqual(1);
  });

  it('should add the children into the UI', () => {
    const selector = wrapper.find('.test-class').text();
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual('');
    expect(selector).toEqual('test link');
  });

});
