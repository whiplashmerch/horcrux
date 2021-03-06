import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './';


describe('<App />', () => {

  const wrapper = mount(<App />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // STATE

  it('should have a default mobileNavActive state', () => {
    const state = wrapper.state().mobileNavActive;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual(false);
    expect(state).toEqual(true); // JSDOM === desktop
  });

  // COMPONENT

  it('should reuturn a <Router />', () => {
    const type = wrapper.type();
    expect(type).not.toBeNull();
    expect(type).toBeDefined();
  });

  it('should update the state to false when called', () => {
    const func = wrapper.instance()._hideNav;

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    wrapper.setState({ mobileNavActive: true });

    func();
    setTimeout(() => {
      expect(wrapper.state().mobileNavActive).toEqual(false);
    }, 400);
  });

  it('should update the state to true when called', () => {
    const func = wrapper.instance()._showNav;

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    wrapper.setState({ mobileNavActive: false });

    func();
    setTimeout(() => {
      expect(wrapper.state().mobileNavActive).toEqual(true);
    }, 400);
  });

});
