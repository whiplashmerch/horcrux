import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import List from '../../node_modules/components/Icon/Icons/components/List';


describe('<List />', () => {

  const wrapper = mount(<List />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <List />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
