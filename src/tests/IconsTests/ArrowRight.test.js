import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ArrowRight from '../../node_modules/components/Icon/Icons/components/ArrowRight';


describe('<ArrowRight />', () => {

  const wrapper = mount(<ArrowRight />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ArrowRight />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
