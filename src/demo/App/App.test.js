import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './';


describe('<App />', () => {

  const wrapper = mount(<App />);


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // COMPONENT

  it('should reuturn a <Router />', () => {
    const type = wrapper.type();
    expect(type).not.toBeNull();
    expect(type).toBeDefined();
  });

});
