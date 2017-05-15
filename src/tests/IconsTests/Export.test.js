import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Export from '../../node_modules/components/Icon/Icons/components/Export';


describe('<Export />', () => {

  const wrapper = mount(<Export />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Export />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
