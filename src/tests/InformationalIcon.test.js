import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { InformationalIcon } from '../node_modules';


describe('<InformationalIcon />', () => {

  const props = {
    color: 'blue',
    height: '60',
    name: 'logistics',
    width: '60'
  };

  const defaultWrapper = mount(<InformationalIcon name="logistics" />);

  const wrapper = mount(
    <InformationalIcon { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InformationalIcon name="logistics" />, div);
  });

  it('should have a default color prop', () => {
    const prop = defaultWrapper.props().color;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('#646471');
  });

  it('should have a default height prop', () => {
    const prop = defaultWrapper.props().height;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).not.toEqual(50);
    expect(prop).toEqual('50');
  });

  it('should have a default width prop', () => {
    const prop = defaultWrapper.props().width;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).not.toEqual(50);
    expect(prop).toEqual('50');
  });

  it('should take a color prop', () => {
    const prop = wrapper.props().color;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('#646471');
    expect(prop).toEqual('blue');
  });

  it('should take a name prop', () => {
    const prop = wrapper.props().name;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('logistics');
  });

  it('should take a height prop', () => {
    const prop = wrapper.props().height;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).not.toEqual('50');
    expect(prop).toEqual('60');
  });

  it('should take a width prop', () => {
    const prop = wrapper.props().width;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).not.toEqual('50');
    expect(prop).toEqual('60');
  });

});
