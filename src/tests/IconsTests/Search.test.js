import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Search from '../../node_modules/components/Icon/Icons/components/Search';


describe('<Search />', () => {

  const wrapper = mount(<Search />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Search />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
