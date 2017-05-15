import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Tabview } from '../node_modules';


describe('<Tabview />', () => {


  const props = {
    tabs: [
      { id: 0, name: 'one', view: null },
      { id: 1, name: 'two', view: null },
      { id: 2, name: 'three', view: null },
      { id: 3, name: 'processing', view: null },
      { id: 4, name: 'matt', view: null }
    ]
  }

  const defaultWrapper = mount(<Tabview />);
  const wrapper = mount(<Tabview { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabview />, div);
  });

  it('should have a default tabs prop', () => {
    expect(defaultWrapper.props().tabs).not.toBeNull();
    expect(defaultWrapper.props().tabs).toBeDefined();
    expect(defaultWrapper.props().tabs).not.toEqual('[]');
    expect(defaultWrapper.props().tabs).toEqual([]);
  });

  it('should accept a tabs prop', () => {
    expect(wrapper.props().tabs).not.toBeNull();
    expect(wrapper.props().tabs).toBeDefined();
    expect(wrapper.props().tabs).not.toEqual([]);
    expect(wrapper.props().tabs).toEqual(props.tabs);
  });

  it('should have a default activeTab state', () => {
    expect(defaultWrapper.state().activeTab).not.toBeNull();
    expect(defaultWrapper.state().activeTab).toBeDefined();
    expect(defaultWrapper.state().activeTab).not.toEqual('0');
    expect(defaultWrapper.state().activeTab).toEqual(0);
  });

  it('should display the correct amount of tabs in the UI', () => {
    expect(wrapper.find('.Tabview-link').length).not.toBeNull();
    expect(wrapper.find('.Tabview-link').length).toBeDefined();
    expect(wrapper.find('.Tabview-link').length).not.toEqual(0);
    expect(wrapper.find('.Tabview-link').length).toEqual(props.tabs.length);
  });

  it('should display the tabs prop name data in the UI', () => {
    expect(wrapper.find('.Tabview-link').get(0).text).not.toBeNull();
    expect(wrapper.find('.Tabview-link').get(0).text).toBeDefined();
    expect(wrapper.find('.Tabview-link').get(0).text).not.toEqual('');
    expect(wrapper.find('.Tabview-link').get(0).text).toEqual('one');
    expect(wrapper.find('.Tabview-link').get(1).text).toEqual('two');
    expect(wrapper.find('.Tabview-link').get(2).text).toEqual('three');
  });

  // it('should allow programatic routing', () => {
  //   global.window.location.hash = '#matt';
  //   wrapper.setProps({ test: '' });
  //   expect(global.window.location.hash).toEqual('#matt');
  //   expect(wrapper.state().activeTab).toEqual(4);
  //   global.window.location.hash = '#processing';
  //   wrapper.setProps({ test: 'another' });
  //   expect(wrapper.state().activeTab).toEqual(3);
  // });

  // it('should update the activeTab state when a tab is clicked', () => {
  //   const tab = wrapper.find('.Tabview-li a').at(1);
  //   expect(tab.length).toEqual(1);
  //   tab.simulate('click');
  //   expect(wrapper.state().activeTab).toEqual(1);
  //   expect(global.window.location.hash).toEqual('#two');
  // });

  // it('_updateView should not update the activeTab state when the same tab is clicked', () => {
  //   const method = wrapper.instance()._updateView
  //   expect(method).not.toBeNull();
  //   expect(method).toBeDefined();
  //   expect(method(1)).toEqual(undefined);
  // });

  // it('should not cause an error when a bad hash is present', () => {
  //   global.window.location.hash = '#bobmarley';
  //   wrapper.setProps({ test: '' });
  //   expect(global.window.location.hash).toEqual('#bobmarley');
  //   expect(wrapper.state().activeTab).toEqual(1);
  // });

});
