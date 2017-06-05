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

  // COMPONENT

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

});
