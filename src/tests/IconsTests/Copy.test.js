import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Copy from '../../node_modules/components/Icon/Icons/components/Copy';


describe('<Copy />', () => {

  const wrapper = mount(<Copy />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Copy />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
