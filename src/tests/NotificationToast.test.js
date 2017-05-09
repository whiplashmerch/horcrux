import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { NotificationToast } from '../node_modules';


describe('<NotificationToast />', () => {

  const defaultWrapper = mount(<NotificationToast />);

  const wrapper = mount(
    <NotificationToast
      active
      message="test notification message"
      theme="pending"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotificationToast />, div);
  });

  it('should take a default active prop', () => {
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
    expect(prop).not.toEqual('true');
    expect(prop).toEqual(true);
  });

  it('should take a default message prop', () => {
    const prop = defaultWrapper.props().message;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('add your notification message prop');
  });

  it('should accept a message prop', () => {
    const prop = wrapper.props().message;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('add your notification message prop');
    expect(prop).toEqual('test notification message');
  });

  it('should take a default theme prop', () => {
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
    expect(prop).toEqual('pending');
  });

  it('should return null if active prop false', () => {
    const selector = defaultWrapper.find('.NotificationToast').length;
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual(1);
    expect(selector).toEqual(0);
  });

  it('should display the message in the UI', () => {
    const selector = wrapper.find('.NotificationToast-text').text();
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual('');
    expect(selector).toEqual('test notification message.');
  });

  it('should add the theme as a class to the parent element', () => {
    const selector = wrapper.find('.NotificationToast.pending');
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
  });

});
