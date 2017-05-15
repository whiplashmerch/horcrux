import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ArrowDownCircle from '../../node_modules/components/Icon/Icons/components/ArrowDownCircle';


describe('<ArrowDownCircle />', () => {

  const wrapper = mount(<ArrowDownCircle />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ArrowDownCircle />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
