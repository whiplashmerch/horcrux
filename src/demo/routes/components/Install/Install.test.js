import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Install from './';


describe('<Install />', () => {

  const wrapper = mount(<Install />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Install />, div);
  });

  // COMPONENT

});
