import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Grid from '../../node_modules/components/Icon/Icons/components/Grid';


describe('<Grid />', () => {

  const wrapper = mount(<Grid />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Grid />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
