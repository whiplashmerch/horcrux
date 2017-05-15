import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Legend } from '../node_modules';


describe('<Legend />', () => {

  const props = {
    activeIndex: '2',
    total: '4'
  };

  const wrapper = mount(
    <Legend { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Legend { ...props } />, div);
  });

  it('should have a default color prop', () => {
    const prop = wrapper.props().color;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('#8071FE');
  });

  it('should have an activeIndex prop', () => {
    const prop = wrapper.props().activeIndex;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('0');
    expect(prop).toEqual('2');
  });

  it('should have an total prop', () => {
    const prop = wrapper.props().total;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('0');
    expect(prop).toEqual('4');
  });

  it('should have same amount of <li/> as total prop', () => {
    const selector = wrapper.find('.Legend-list-li').length;
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual(0);
    expect(selector).toEqual(4);
  });

  it('should have 1 active dot', () => {
    const selector = wrapper.find('.active').length;
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual(0);
    expect(selector).toEqual(1);
  });

  it('should have 2 completed dots', () => {
    const selector = wrapper.find('.completed').length;
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).toEqual(2);
  });

});
