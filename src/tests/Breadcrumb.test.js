import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { Breadcrumb } from '../node_modules';


describe('<Breadcrumb />', () => {

  const props = {
    bgColor: '#f5f5f5',
    list: [{ name: 'test', url: 'test' }]
  };

  const defaultWrapper = mount(<Breadcrumb />);
  const shallowWrap = shallow(<Breadcrumb />);

  const wrapper = mount(
    <Breadcrumb { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumb />, div);
  });

  // PROPS

  it('should have a list prop', () => {
    const prop = wrapper.props().list;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop.length).toEqual(1);
    expect(prop).toEqual(props.list);
    expect(prop).not.toEqual([]);
  });

  it('should have a bgColor prop', () => {
    const prop = wrapper.props().bgColor;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('transparent');
    expect(prop).toEqual('#f5f5f5');
  });

  it('should have a default bgColor prop value', () => {
    const prop = defaultWrapper.props().bgColor;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('transparent');
  });

  it('should have a default list prop value', () => {
    const prop = defaultWrapper.props().list;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop.length).toEqual(0);
    expect(prop).not.toEqual(props.list);
  });

  // COMPONENT

  it('should display the list items of array length', () => {
    const el = wrapper.find('.Breadcrumb-list-li').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });

  it('should not show if list length is 0', () => {
    const el = shallowWrap.find('.Breadcrumb');
    expect(el).not.toEqual(true);
    expect(el.length).toEqual(0);
    expect(el.length).not.toEqual(1);
  });

});
