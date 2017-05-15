import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import MoreOptions from '../../node_modules/components/Icon/Icons/components/MoreOptions';

describe('<MoreOptions />', () => {

  const wrapper = mount(<MoreOptions />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MoreOptions />, div
    );
  });

  // PROPS
  // COMPONENT
  // STATE

});
