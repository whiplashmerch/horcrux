import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Download from '../../node_modules/components/Icon/Icons/components/Download';


describe('<Download />', () => {

  const wrapper = mount(<Download />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Download />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
