import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import AlarmFilled from '../../node_modules/components/Icon/Icons/components/AlarmFilled';


describe('<AlarmFilled />', () => {

  const wrapper = mount(<AlarmFilled />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AlarmFilled />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
