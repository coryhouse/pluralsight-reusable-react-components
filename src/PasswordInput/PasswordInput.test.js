import React from 'react';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

// Note that this import can be commented out once
// we declare the jestSetup in package.json because
// Enzyme functions are globally available for tests.
// import { shallow } from 'enzyme';

describe('PasswordInput', () => {
  it('Toggles input type when show/hide password clicked', () => {
    const wrapper = shallow(<PasswordInput
     name="test"
     onChange={() => {}}
     showVisibilityToggle={true}
     maxLength={50}/>
    );

    // Password input should have a type of password initially.
    expect(wrapper.find({type: 'password'})).toHaveLength(1);
    wrapper.find('a').simulate('click');

    // Password input should have a type of text after clicking toggle.
    let passwordInput = wrapper.find({type: 'text'});
    expect(passwordInput).toHaveLength(1);
  });
});
