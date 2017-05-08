import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Toggle from '../node_modules/components/Toggle';


describe('<Toggle />', () => {

  const callback = jest.fn();
  const ref = jest.fn();
  const toggleRef = jest.fn();

  const props = {
    active: true,
    callback,
    ref,
    toggleRef,
    name: 'test name'
  };

  const defaultWrapper = mount(<Toggle />);
  const wrapper = mount(<Toggle { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toggle { ...props } />, div);
  });

  // PROPS

  it('should have a default active prop', () => {
    const prop = defaultWrapper.props().active;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept a active prop', () => {
    const prop = wrapper.props().active;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(false);
    expect(prop).toEqual(props.active);
  });

  it('should have a default readOnly prop', () => {
    const prop = defaultWrapper.props().readOnly;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept a readOnly prop', () => {
    const prop = wrapper.props().readOnly;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(false);
  });

  it('should accept all given props', () => {
    const prop = wrapper.props().name;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(props.name);
  });

  it('should have a default toggleRef prop', () => {
    const prop = defaultWrapper.props().toggleRef;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(() => prop()).not.toThrow();
  });

  it('should accept a toggleRef prop', () => {
    const prop = wrapper.props().toggleRef;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(props.toggleRef);
  });

  // // STATE

  it('should have a default active state prop', () => {
    const state = defaultWrapper.state().active;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  // // COMPONENT

  it('should update the state when called', () => {
    const func = wrapper.instance()._updateState;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);
    expect(() => func()).not.toThrow();
    expect(wrapper.state().active).toEqual(true);
  });

  it('should add an "active" class if state active', () => {
    const defaultEl = defaultWrapper.find('.Toggle').hasClass('active');
    const el = wrapper.find('.Toggle').hasClass('active');

    expect(defaultEl).not.toEqual(true);
    expect(defaultEl).toEqual(false);
    expect(el).not.toEqual(false);
    expect(el).toEqual(true);
  });

  it('should update the state to match defaultChecked on the input', () => {
    expect(defaultWrapper.props().active).toEqual(false);
    expect(defaultWrapper.state().active).toEqual(false);
    expect(defaultWrapper.find('.Toggle-input').props().defaultChecked).toEqual(false);

    defaultWrapper.setProps({ active: true });

    expect(defaultWrapper.props().active).toEqual(true);
    expect(defaultWrapper.state().active).toEqual(true);
    expect(defaultWrapper.find('.Toggle-input').props().defaultChecked).toEqual(true);
  });

  it('should not update the state if readOnly prop true', () => {
    const el = wrapper.find('.Toggle-input');

    wrapper.setProps({ readOnly: true });
    wrapper.setState({ active: false  });

    el.simulate('click');

    expect(wrapper.state().active).not.toEqual(true);
    expect(wrapper.state().active).toEqual(false);
  });

});
