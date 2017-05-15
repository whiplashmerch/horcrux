import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ArrowDown from '../../node_modules/components/Icon/Icons/components/ArrowDown';


describe('<ArrowDown />', () => {

  const wrapper = mount(<ArrowDown />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ArrowDown />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
