import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Add from '../../node_modules/components/Icon/Icons/components/Add';


describe('<Add />', () => {

  const wrapper = mount(<Add />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Add />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
