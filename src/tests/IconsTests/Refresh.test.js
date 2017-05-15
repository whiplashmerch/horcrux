import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Refresh from '../../node_modules/components/Icon/Icons/components/Refresh';


describe('<Refresh />', () => {

  const wrapper = mount(<Refresh />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Refresh />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
