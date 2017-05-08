import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Table } from '../node_modules';


describe('<Table />', () => {

  const defaultWrapper = mount(<Table />);

  const wrapper = mount(
    <Table inverted>
      <thead>
        <tr><th>test</th></tr>
      </thead>
      <tbody>
        <tr><td>test data</td></tr>
      </tbody>
    </Table>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
  });

  // PROPS

  it('should have a default inverted prop', () => {
    const prop = defaultWrapper.props().inverted;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept an inverted prop', () => {
    const prop = wrapper.props().inverted;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(false);
    expect(prop).toEqual(true);
  });

  // COMPONENT

  it('should add a "inverted" class if inverted prop true', () => {
    const el = wrapper.find('.inverted').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(undefined);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });

  it('should return null if no children given', () => {
    expect(defaultWrapper.find('.Table').length).not.toEqual(undefined);
    expect(defaultWrapper.find('.Table').length).not.toEqual(1);
    expect(defaultWrapper.find('.Table').length).toEqual(0);
  });

  it('should display the children in the UI', () => {
    expect(wrapper.props().children).not.toEqual(null);
    expect(wrapper.props().children).not.toEqual(undefined);
    expect(wrapper.props().children.length).not.toEqual(0);
    expect(wrapper.find('th').text()).not.toEqual('');
    expect(wrapper.find('th').text()).toEqual('test');
    expect(wrapper.find('td').text()).not.toEqual('');
    expect(wrapper.find('td').text()).toEqual('test data');
  });

});
