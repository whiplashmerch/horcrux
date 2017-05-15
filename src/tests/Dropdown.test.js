import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Dropdown } from '../node_modules';


describe('<Dropdown />', () => {

  const defaultWrapper = mount(
    <Dropdown>
      <p></p>
    </Dropdown>
  );

  const wrapper = mount(
    <Dropdown right open={ true }>
      <p>test 1</p>
      <p>test 2</p>
    </Dropdown>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown><p></p></Dropdown>, div);
  });

  it('should have a default open prop', () => {
    expect(defaultWrapper.props().open).not.toEqual(null);
    expect(defaultWrapper.props().open).not.toEqual(undefined);
    expect(defaultWrapper.props().open).not.toEqual(true);
    expect(defaultWrapper.props().open).not.toEqual('false');
    expect(defaultWrapper.props().open).toEqual(false);
  });

  it('should accept an open prop', () => {
    expect(wrapper.props().open).not.toEqual(null);
    expect(wrapper.props().open).not.toEqual(undefined);
    expect(wrapper.props().open).not.toEqual(false);
    expect(wrapper.props().open).not.toEqual('true');
    expect(wrapper.props().open).toEqual(true);
  });

  it('should have a default left prop', () => {
    expect(defaultWrapper.props().left).not.toEqual(null);
    expect(defaultWrapper.props().left).not.toEqual(undefined);
    expect(defaultWrapper.props().left).not.toEqual('false');
    expect(defaultWrapper.props().left).toEqual(false);
  });

  it('should accept an left prop', () => {
    expect(wrapper.props().left).not.toEqual(null);
    expect(wrapper.props().left).not.toEqual(undefined);
    expect(wrapper.props().left).not.toEqual(true);
    expect(wrapper.props().left).not.toEqual('false');
    expect(wrapper.props().left).toEqual(false);
  });

  it('should have a default right prop', () => {
    expect(defaultWrapper.props().right).not.toEqual(null);
    expect(defaultWrapper.props().right).not.toEqual(undefined);
    expect(defaultWrapper.props().right).not.toEqual(true);
    expect(defaultWrapper.props().right).not.toEqual('false');
    expect(defaultWrapper.props().right).toEqual(false);
  });

  it('should accept an right prop', () => {
    expect(wrapper.props().right).not.toEqual(null);
    expect(wrapper.props().right).not.toEqual(undefined);
    expect(wrapper.props().right).not.toEqual(false);
    expect(wrapper.props().right).not.toEqual('true');
    expect(wrapper.props().right).toEqual(true);
  });

  it('should add a left or right class depending on the props', () => {
    expect(wrapper.props().right).toEqual(true);
    expect(wrapper.find('.Dropdown.right')).not.toEqual(null);
    expect(wrapper.find('.Dropdown.right')).not.toEqual(undefined);
    expect(wrapper.find('.Dropdown.left').length).not.toEqual(1);
    expect(wrapper.find('.Dropdown.left').length).toEqual(0);
  });

  it('should display the children given', () => {
    expect(wrapper.find('.Dropdown-ul').children()).not.toEqual(null);
    expect(wrapper.find('.Dropdown-ul').children()).not.toEqual(undefined);
    expect(wrapper.find('.Dropdown-ul').children().length).not.toEqual(0);
    expect(wrapper.find('.Dropdown-ul').children().length).toEqual(2);
  });

});
