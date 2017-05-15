import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Trash from '../../node_modules/components/Icon/Icons/components/Trash';


describe('<Trash />', () => {

  const wrapper = mount(<Trash />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Trash />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
