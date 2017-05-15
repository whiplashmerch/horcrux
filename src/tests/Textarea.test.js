import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Textarea } from '../node_modules';


describe('<Textarea />', () => {

  const props = {
    inputLabel: 'test label',
    placeholder: 'dear customer, you rule'
  };

  const defaultWrapper = mount(<Textarea />);

  const wrapper = mount(
    <Textarea { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Textarea { ...props } />, div);
  });

  // PROPS

  it('should have a default inputLabel prop', () => {
    const prop = defaultWrapper.props().inputLabel;
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(null);
  });

  it('should accept a inputLabel prop', () => {
    const prop = wrapper.props().inputLabel;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.inputLabel);
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().placeholder;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.placeholder);
  });

  // COMPONENT

  it('should display the inputLabel in the UI if given', () => {
    const defaultText = defaultWrapper.find('.Textarea').text();
    const text = wrapper.find('.Textarea').text();

    expect(text).not.toEqual(null);
    expect(text).not.toEqual(undefined);
    expect(text).not.toEqual('');
    expect(text).toEqual(props.inputLabel);
    // check for no prop
    expect(defaultText).not.toEqual(undefined);
    expect(defaultText).not.toEqual(null);
    expect(defaultText).toEqual('');
  });

  it('should display a textarea input', () => {
    const el = wrapper.find('.Textarea-input').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(undefined);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });
});
