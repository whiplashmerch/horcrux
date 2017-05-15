import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Edit from '../../node_modules/components/Icon/Icons/components/Edit';


describe('<Edit />', () => {

  const wrapper = mount(<Edit />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Edit />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
