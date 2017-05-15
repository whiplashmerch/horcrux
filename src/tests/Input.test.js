import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Input } from '../node_modules';


describe('<Input />', () => {

  const onUserInput = jest.fn();

  const props = {
    basic: true,
    inputLabel: 'test label',
    type: 'email',
    maxLength: 220,
    placeholder: 'test',
    onUserInput,
    search: true,
    required: true
  };
  const noAnimationProps = { ...props, noAnimation: true };

  const defaultWrapper = mount(<Input />);
  const wrapper = mount(<Input { ...props } />);
  const noAnimationWrapper = mount(<Input { ...noAnimationProps } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });

  it('should have a default inputLabel prop', () => {
    const prop = defaultWrapper.props().inputLabel;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('test label');
    expect(prop).toEqual('');
  });

  it('should accept a inputLabel prop', () => {
    const prop = wrapper.props().inputLabel;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('test label');
  });

  it('should have a default basic prop', () => {
    const prop = defaultWrapper.props().basic;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept a basic prop', () => {
    const prop = wrapper.props().basic;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(false);
    expect(prop).not.toEqual('true');
    expect(prop).toEqual(true);
  });

  it('should have a default noAnimation prop', () => {
    const prop = defaultWrapper.props().noAnimation;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('true');
    expect(prop).toEqual(false);
  });

  it('should accept a noAnimation prop', () => {
    const prop = noAnimationWrapper.props().noAnimation;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(false);
    expect(prop).not.toEqual('true');
    expect(prop).toEqual(true);
  });

  it('should have a default onUserInput prop', () => {
    const prop = defaultWrapper.props().onUserInput;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toThrow();
  });

  it('should accept a onUserInput prop', () => {
    const prop = wrapper.props().onUserInput;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toThrow();
    expect(prop).toEqual(onUserInput);
  });

  it('should allow all other props given', () => {
    const prop = wrapper.props().placeholder;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('test');
  });

  it('should have a default search prop', () => {
    const prop = defaultWrapper.props().search;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept a search prop', () => {
    const prop = wrapper.props().search;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(false);
    expect(prop).not.toEqual('true');
    expect(prop).toEqual(true);
  });

  it('should have a default passVisibility state', () => {
    const state = defaultWrapper.state().passVisibility;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  it('should display a <AnimatedInput /> if basic prop false', () => {
    const el = wrapper.find('.AnimatedInput').length
    const defaultEl = defaultWrapper.find('.AnimatedInput').length
    expect(defaultEl).not.toEqual(null);
    expect(defaultEl).not.toEqual(undefined);
    expect(defaultEl).not.toEqual(0);
    expect(defaultEl).toEqual(1);

    expect(el).not.toEqual(1);
    expect(el).toEqual(0);
  });

  it('should display the inputLabel in the UI', () => {
    const prop = wrapper.props().inputLabel;
    expect(prop).toEqual('test label');
    expect(prop).not.toEqual('');
    expect(wrapper.find('.Input-label').text()).not.toEqual('');
    expect(prop).toEqual('test label');
  });

  it('should add a special "search" class if search prop true', () => {
    const defaultEl = defaultWrapper.find('.search').length;
    const el = wrapper.find('.search').length;
    expect(defaultEl).not.toEqual(1);
    expect(defaultEl).toEqual(0);

    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });

  it('should display a password button if type="password"', () => {
    const tag = '.Input-toggle-value-btn';
    const passWrapper = mount(<Input basic type="password" />).find(tag).length;

    expect(passWrapper).not.toEqual(null);
    expect(passWrapper).not.toEqual(undefined);
    expect(passWrapper).not.toEqual(0);
    expect(passWrapper).toEqual(1);
  });

  it('should toggle passVisibility state when btn clicked', () => {
    const passWrapper = mount(<Input basic type="password" />);
    expect(passWrapper.state().passVisibility).toEqual(false);
    passWrapper.find('.Input-toggle-value-btn').simulate('click');
    expect(passWrapper.state().passVisibility).toEqual(true);
    passWrapper.find('.Input-toggle-value-btn').simulate('click');
    expect(passWrapper.state().passVisibility).toEqual(false);
  });

  it('should add a special "show" class if passVisibility state true', () => {
    const passWrapper = mount(<Input basic type="password" />);
    expect(passWrapper.find('.show').length).not.toEqual(1)
    expect(passWrapper.find('.show').length).toEqual(0)
    passWrapper.find('.Input-toggle-value-btn').simulate('click');
    expect(passWrapper.find('.show').length).not.toEqual(0)
    expect(passWrapper.find('.show').length).toEqual(1)
  });

  it('should have an active class if noAnimation is true', () => {
    const noAnimation = mount(<Input noAnimation />);
    expect(noAnimation.find('.AnimatedInput .active').length).toEqual(1);
  });

  it('should should call the onUserInput function when text is input', () => {
    wrapper.find('.Input-input').simulate('change', { target: { value: 'horcrux or die' } } );
    expect(onUserInput).toHaveBeenCalled();
    expect(onUserInput).toHaveBeenCalledTimes(2);
    expect(onUserInput.mock.calls[1][0]).toEqual('horcrux or die');
  });

});
