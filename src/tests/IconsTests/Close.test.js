import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Close from '../../node_modules/components/Icon/Icons/components/Close';


describe('<Close />', () => {

  const wrapper = mount(<Close />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Close />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
