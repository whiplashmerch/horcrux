import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Settings from '../../node_modules/components/Icon/Icons/components/Settings';


describe('<Settings />', () => {

  const wrapper = mount(<Settings />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Settings />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
