import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
// import { EditableDiv, Input } from 'src';
import { EditableDiv } from '../node_modules';


describe('<EditableDiv />', () => {

  const props = {
    dataId: 1234,
    divContent: 'test content',
    name: 'description',
    readOnly: false,
    theme: 'accent',
    type: 'number',
    onUpdate: jest.fn()
  };

  const defaultWrapper = mount(<EditableDiv />);
  const wrapper = mount(<EditableDiv { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditableDiv />, div);
  });

  // PROPS

  it('should have a default dataId prop', () => {
    const prop = defaultWrapper.props().dataId;
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(null);
  });

  it('should accept a dataId prop', () => {
    const prop = wrapper.props().dataId;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('1234');
    expect(prop).toEqual(props.dataId);
  });

  it('should have a default divContent prop', () => {
    const prop = defaultWrapper.props().divContent;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('no content');
  });

  it('should accept a divContent prop', () => {
    const prop = wrapper.props().divContent;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).not.toEqual('no content');
    expect(prop).toEqual(props.divContent);
  });

  it('should have a default name prop', () => {
    const prop = defaultWrapper.props().name;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual('');
  });

  it('should accept a name prop', () => {
    const prop = wrapper.props().name;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.name);
  });

  it('should have a default theme prop', () => {
    const prop = defaultWrapper.props().theme;
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(null);
  });

  it('should accept a theme prop', () => {
    const prop = wrapper.props().theme;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual(props.theme);
  });

  it('should have a default readOnly prop', () => {
    const prop = defaultWrapper.props().readOnly;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('false');
    expect(prop).toEqual(false);
  });

  it('should accept a readOnly prop', () => {
    const prop = wrapper.props().readOnly;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).toEqual(props.readOnly);
  });

  it('should have a default type prop', () => {
    const prop = defaultWrapper.props().type;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
    expect(prop).toEqual('text');
  });

  it('should accept a type prop', () => {
    const prop = wrapper.props().type;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('text');
    expect(prop).toEqual(props.type);
  });

  it('should have a default onUpdate prop', () => {
    const prop = defaultWrapper.props().onUpdate;
    const result = console.log('add onUpdate prop');
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop()).toEqual(result);
  });

  it('should accept a onUpdate prop', () => {
    const prop = wrapper.props().onUpdate;
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual('');
  });

  // STATE

  it('should have a default isEditing state', () => {
    const state = defaultWrapper.state().isEditing;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  it('should have a default showSaved state', () => {
    const state = defaultWrapper.state().showSaved;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).not.toEqual('false');
    expect(state).toEqual(false);
  });

  it('should have a default textChanged state', () => {
    const state = defaultWrapper.state().textChanged;
    expect(state).not.toEqual(null);
    expect(state).not.toEqual(undefined);
    expect(state).toEqual('');
  });

  // COMPONENT

  it('should add a special theme class if theme prop given', () => {
    const el = wrapper.find('.accent').length;
    expect(el).not.toEqual(null);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });

  it('should display "no content" if divContent is an empty String', () => {
    const newWrapper = mount(<EditableDiv divContent="" />);
    const text = newWrapper.find('.EditableDiv-text').text();
    expect(text).not.toEqual('');
    expect(text).toEqual('no content');
  });

  it('should not have an input on render', () => {
    const defaultEl = defaultWrapper.find('input').length;
    const el = wrapper.find('input').length;

    expect(defaultEl).not.toEqual(1);
    expect(defaultEl).toEqual(0);
    expect(el).not.toEqual(1);
    expect(el).toEqual(0);
  });

  it('should return a <DotLoader /> if divContent is null', () => {
    const newWrapper = mount(<EditableDiv divContent={ null } />);
    const dotEl = newWrapper.find('.DotLoader').length;
    const el = newWrapper.find('.EditableDiv').length;

    expect(dotEl).not.toEqual(0);
    expect(dotEl).toEqual(1);
    expect(el).not.toEqual(1);
    expect(el).toEqual(0);
  });

  it('should not return a <DotLoader /> if divContent is an empty String', () => {
    const newWrapper = mount(<EditableDiv divContent="" />);
    const dotEl = newWrapper.find('.DotLoader').length;
    const el = newWrapper.find('.EditableDiv').length;

    expect(dotEl).not.toEqual(1);
    expect(dotEl).toEqual(0);
    expect(el).not.toEqual(0);
    expect(el).toEqual(1);
  });

  it('should update isEditing to true onClick', () => {
    expect(wrapper.state().isEditing).toEqual(false);
    expect(wrapper.find('.EditableDiv-text').length).toEqual(1);
    wrapper.find('.EditableDiv-text').simulate('click');
    expect(wrapper.state().isEditing).toEqual(true);
  });

  it('should return an input from _getInputContent', () => {
    const func = wrapper.instance()._getInputContent;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);
    expect(func()).not.toEqual(null);
    expect(func()).not.toEqual(undefined);
  });

  it('should return an input from _getTextContent', () => {
    const func = wrapper.instance()._getTextContent;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);
    expect(func()).not.toEqual(null);
    expect(func()).not.toEqual(undefined);
  });

  it('should update the state and call onUpdate prop when run', () => {
    const func = wrapper.instance()._handleNumSave;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    wrapper.setState({ textChanged: 10 });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).toEqual(false);
      expect(wrapper.state().showSaved).toEqual(true);
      expect(props.onUpdate).toHaveBeenCalled();
      expect(props.onUpdate).toHaveBeenCalledTimes(1);
    }, 400);
  });

  it('should update the state and call onUpdate prop when run', () => {
    const func = wrapper.instance()._handleTextSave;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    wrapper.setState({ textChanged: 10 });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).toEqual(false);
      expect(wrapper.state().showSaved).toEqual(true);
      expect(props.onUpdate).toHaveBeenCalled();
      expect(props.onUpdate).toHaveBeenCalledTimes(1);
    }, 400);
  });

  it('should update the isEditing & textChanged state when run', () => {
    const func = wrapper.instance()._onReset;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    wrapper.setState({
      isEditing: true,
      textChanged: ''
    });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).toEqual(true);
      expect(wrapper.state().textChanged).toEqual(props.divContent);
    }, 400);
  });

  it('should update the state and call onUpdate prop when run', () => {
    const func = wrapper.instance()._onUpdate;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    wrapper.setState({ textChanged: 10 });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).toEqual(false);
      expect(wrapper.state().showSaved).toEqual(true);
      expect(props.onUpdate).toHaveBeenCalled();
      expect(props.onUpdate).toHaveBeenCalledTimes(1);
    }, 400);
  });

  it('should update the textChanged state to args given', () => {
    const func = wrapper.instance()._handleInput;
    const textChanged = 'new text';

    wrapper.setState({ textChanged: '' });

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    func(textChanged);

    setTimeout(() => {
      expect(wrapper.state().textChanged).toEqual(textChanged);
    }, 400);

    // reset state
    wrapper.setState({ textChanged: '' });
  });


  it('should return _handleSave if keypress === "enter"', () => {
    const e = { keyCode: 13 };
    const newWrapper = wrapper;

    newWrapper.instance()._handleSave = jest.fn();
    newWrapper.update();

    newWrapper.instance()._handleKeyPress(e);
    expect(newWrapper.instance()._handleSave).toHaveBeenCalled();
    expect(newWrapper.instance()._handleSave).toHaveBeenCalledTimes(1);
  });



  it('should update the isEditing state to false', () => {
    const func = wrapper.instance()._hideEditing;

    wrapper.setState({ isEditing: true });

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).toEqual(false);
    }, 400);
  });

  it('should return a new state from _hideShowSaved', () => {
    const func = wrapper.instance()._hideShowSaved;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    wrapper.setState({ showSaved: true });

    func();

    setTimeout(() => {
      expect(wrapper.state().showSaved).toEqual(true);
    }, 400);

    expect(wrapper.state().showSaved).toEqual(false);
  });

  it('should return a new state from _showEditing', () => {
    const func = wrapper.instance()._showEditing;

    expect(func).not.toEqual(null);
    expect(func).not.toEqual(undefined);

    wrapper.setState({ showSaved: false });
    wrapper.setProps({ readOnly: false });
    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).toEqual(true);
    }, 400);
  });

  it('should update the state when input is changed', () => {
    const newWrapper = mount(<EditableDiv divContent="test content" />);
    const selectorInput = '.Input';
    let thisInput = null;

    newWrapper.find('.EditableDiv-text').simulate('click');
    thisInput = newWrapper.find(selectorInput);

    expect(thisInput.length).toEqual(1);
    expect(newWrapper.state().textChanged).toEqual('');

    newWrapper.instance()._handleInput('A new hope');
    expect(newWrapper.state().textChanged).toEqual('A new hope');
  });

  it('should be able to save when pressing enter key', () => {
    const newWrapper = mount(
      <EditableDiv
        dataId={ 1234 }
        divContent="test content"
        name="description"
        onUpdate={ props.updateItem }
      />
    );

    const inputSelector = newWrapper.find('.Input');
    let newInput = null;

    expect(inputSelector.length).not.toEqual(1);
    expect(inputSelector.length).toEqual(0);

    // activate editing mode
    newWrapper.find('.EditableDiv-text').simulate('click');
    newInput = newWrapper.find('.Input');

    expect(newInput.length).not.toEqual(0);
    expect(newInput.length).toEqual(1);

    // press the Enter key
    newInput.simulate('keypress', { keyCode: 13 });

    // make sure the isEditing class is not applied
    expect(inputSelector.length).not.toEqual(1);
    expect(inputSelector.length).toEqual(0);
  });

  it('should be able to save onBlur', () => {
    const newWrapper = mount(<EditableDiv divContent="test" />);
    const selector = '.Input';
    let thisInput = null;

    expect(newWrapper.find(selector).length).not.toEqual(1);
    expect(newWrapper.find(selector).length).toEqual(0);

    // go into edit mode
    newWrapper.find('.EditableDiv-text').simulate('click');
    thisInput = newWrapper.find(selector);
    expect(thisInput.length).not.toEqual(0);
    expect(thisInput.length).toEqual(1);

    expect(newWrapper.state().textChanged).toEqual('');
    newWrapper.instance()._handleInput('There is no hope');
    expect(newWrapper.state().textChanged).toEqual('There is no hope');

    // blur the input newWrapper
    thisInput = newWrapper.find(selector);
    thisInput.simulate('blur');
  });

});
