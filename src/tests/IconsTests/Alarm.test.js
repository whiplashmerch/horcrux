import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Alarm from '../../node_modules/components/Icon/Icons/components/Alarm';

describe('<Alarm />', () => {

  const wrapper = mount(<Alarm />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Alarm />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
