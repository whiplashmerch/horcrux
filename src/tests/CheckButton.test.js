import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { CheckButton } from '../node_modules';


describe('<CheckButton />', () => {

  const props = {
    checked: true,
    onClick: jest.fn(),
    name: 'test'
  };

  const defaultWrapper = mount(<CheckButton />);
  const wrapper = mount(<CheckButton { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckButton />, div);
  });

  // PROPS

  it('should accept an checked prop', () => {
    const prop = wrapper.props().checked;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(false);
    expect(prop).toEqual(true);
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().name;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('test');
  });

  // COMPONENT

  it('should fire an onClick if given', () => {
    const el = wrapper.find('.CheckButton-input');
    el.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

});
