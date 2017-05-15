import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Navicon } from '../node_modules';

describe('<Navicon />', () => {

  const onUserClick = jest.fn();

  const props = {
    barColor: 'blue',
    onUserClick
  };

  const defaultWrapper = mount(<Navicon />);

  const wrapper = mount(
    <Navicon { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navicon />, div);
  });

  it('should have a default barColor prop', () => {
    const prop = defaultWrapper.props().barColor;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('#303030');
  });

  it('should accept a barColor prop', () => {
    const prop = wrapper.props().barColor;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('#303030');
    expect(prop).toEqual('blue');
  });

  it('should accept a onUserClick prop', () => {
    const prop = wrapper.props().onUserClick;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(onUserClick);
  });

  it('should have a default active state', () => {
    const state = wrapper.state().active;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  it('should have a default finish state', () => {
    const state = wrapper.state().finish;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  it('should have 3 bars in the UI', () => {
    const selector = wrapper.find('.Navicon-bar').length;
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual(0);
    expect(selector).toEqual(3);
  });

  it('should apply the correct classes onClick', () => {
    const selector = wrapper.find('.Navicon-bar').length;
    let link = null;
    let top = null;
    let middle = null;
    let bottom = null;

    expect(selector).toEqual(3);

    link = wrapper.find('.Navicon-link')
    link.simulate('click');

    // step 1 animation
    top = wrapper.find('.active_top').length;
    middle = wrapper.find('.active_middle').length;
    bottom = wrapper.find('.active_bottom').length;
    expect(top).not.toEqual(null);
    expect(top).not.toEqual(undefined);
    expect(top).toEqual(1);
    expect(middle).not.toEqual(null);
    expect(middle).not.toEqual(undefined);
    expect(middle).toEqual(1);
    expect(bottom).not.toEqual(null);
    expect(bottom).not.toEqual(undefined);
    expect(bottom).toEqual(1);
  });

});
