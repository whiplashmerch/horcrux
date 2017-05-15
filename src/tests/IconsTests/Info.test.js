import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Info from '../../node_modules/components/Icon/Icons/components/Info';


describe('<Info />', () => {

  const wrapper = mount(<Info />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Info />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
