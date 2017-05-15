import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Print from '../../node_modules/components/Icon/Icons/components/Print';

describe('<Print />', () => {

  const wrapper = mount(<Print />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Print />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
