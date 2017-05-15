import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Clipboard from '../../node_modules/components/Icon/Icons/components/Clipboard';


describe('<Clipboard />', () => {
  const wrapper = mount(<Clipboard />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Clipboard />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
