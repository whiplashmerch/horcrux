import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Button } from '../node_modules';


describe('<Button />', () => {

  const props = {
    buttonText: 'test button',
    callback: jest.fn(),
    loading: false,
    theme: 'secondary',
    type: 'submit'
  };

  const defaultWrapper = mount(<Button />);
  const wrapper = mount(<Button { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button { ...props } />, div);
  });

  // PROPS

  it('should have a default buttonText prop', () => {
    const prop = defaultWrapper.props().buttonText;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('test button');
    expect(prop).not.toEqual('');
    expect(prop).toEqual('do it');
  });

  it('should accept a buttonText prop', () => {
    const prop = wrapper.props().buttonText;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('do it');
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.buttonText);
  });

  it('should have a default loading prop', () => {
    const prop = defaultWrapper.props().loading;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(false);
  });

  it('should accept a loading prop', () => {
    const prop = wrapper.props().loading;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(props.loading);
  });

  it('should have a default theme prop', () => {
    const prop = defaultWrapper.props().theme;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual('');
  });

  it('should accept a theme prop', () => {
    const prop = wrapper.props().theme;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.theme);
  });

  it('should accept a callback prop', () => {
    const prop = wrapper.props().callback;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(props.callback);
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().type;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.type);
  });

  // COMPONENT

  it('should add a special class containing the theme prop to Component', () => {
    const el = wrapper.find('.secondary').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(undefined);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });

  it('should add a special class containing the theme prop to Component', () => {
    wrapper.setProps({ loading: true });
    const el = wrapper.find('.loading').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(undefined);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);

    // reset
    wrapper.setProps({ loading: props.loading });
  });

  it('should add buttonText to UI', () => {
    const text = wrapper.find('.Button').text();
    expect(text).not.toEqual(null);
    expect(text).not.toEqual(undefined);
    expect(text).not.toEqual('');
    expect(text).not.toEqual('do it');
    expect(text).toEqual('test button');
  });

  it('should display a <DotLoader /> if loading prop true', () => {
    wrapper.setProps({ loading: true });

    const text = wrapper.find('.Button').text();

      expect(text).not.toEqual(null);
      expect(text).not.toEqual(undefined);
      expect(text).not.toEqual(props.buttonText);

      // reset
      wrapper.setProps({ loading: props.loading });
  });

  it('should call the callback prop onClick', () => {
    wrapper.find('.Button').simulate('click');
    expect(props.callback).toHaveBeenCalled();
    expect(props.callback).toHaveBeenCalledTimes(1);
  });

});
