import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import NavMenu from './';


describe('<NavMenu />', () => {

  const props = {
    active: true,
    closeNav: jest.fn()
  };

  const defaultWrapper = mount(<NavMenu />);
  const wrapper = mount(<NavMenu { ...props } />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavMenu />, div);
  });

  // PROPS

  it('should have a default active prop', () => {
    const prop = defaultWrapper.props().active;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept a active prop', () => {
    const prop = wrapper.props().active;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual(false);
    expect(prop).toEqual(props.active);
  });

  it('should have a default closeNav prop', () => {
    const prop = defaultWrapper.props().closeNav;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(() => prop()).not.toThrow();
  });

  it('should accept a closeNav prop', () => {
    const prop = wrapper.props().closeNav;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.closeNav);
  });

  // COMPONENT

  it('should have a list var accessible', () => {
    const list = wrapper.instance().list;
    const result = [
      { id: 0, text: 'installation', url: '/install' },
      { id: 1, text: 'components',   url: '/components' },
      { id: 2, text: 'github',       url: 'https://github.com/whiplashmerch/horcrux' },
      { id: 0, text: 'whiplash',     url: 'https://www.getwhiplash.com/' }
    ];

    expect(list).not.toBeNull();
    expect(list).toBeDefined();
    expect(list).not.toEqual([]);
    expect(list).toEqual(result);
  });

  it('should return null if active prop false', () => {
    const shallowWrap = shallow(<NavMenu />);
    const type = shallowWrap.type();

    expect(type).toBeDefined();
    expect(type).not.toEqual(NavMenu);
    expect(type).toBeNull();
  });

  it('should call the closeNav prop when clicked', () => {
    const btn = wrapper.find('.NavMenu-close-btn');
    btn.simulate('click');
    expect(props.closeNav).toHaveBeenCalled();
    expect(props.closeNav).toHaveBeenCalledTimes(1);
  });

});
