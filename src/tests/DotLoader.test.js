import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { DotLoader } from '../node_modules';


describe('<DotLoader />', () => {

  const wrapper = mount(<DotLoader />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DotLoader />, div);
  });

  // COMPONENT

  it('should display 3 dots', () => {
    const el = wrapper.find('.DotLoader-li').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(undefined);
    expect(el).not.toEqual(0);
    expect(el).not.toEqual(1);
    expect(el).not.toEqual(2);
    expect(el).toEqual(3);
  });

});
