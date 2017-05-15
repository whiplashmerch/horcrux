import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Home from './';


describe('<Home />', () => {

  const wrapper = mount(<Home />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });

  // STATE

  it('should have a default mobileNavActive state', () => {
    const state = wrapper.state().mobileNavActive;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  // COMPONENT

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

  it('should add a "fadeIn" class to img when called', () => {
    const func = wrapper.instance()._loadImage;

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    expect(wrapper.find('.Home-logo.fadeIn').length).not.toEqual(0);
    expect(wrapper.find('.Home-logo.fadeIn').length).toEqual(1);
  });

  it('should add a "fadeIn" class to img when called', () => {
    const func = wrapper.instance()._loadWhipImg;

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    expect(wrapper.find('.Home-whiplash.fadeIn').length).not.toEqual(0);
    expect(wrapper.find('.Home-whiplash.fadeIn').length).toEqual(1);
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
