import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TextInput from '../src/TextInput/TextInput';
import ProgressBar from '../src/ProgressBar/ProgressBar';
import PasswordInputContainer from '../src/PasswordInput/PasswordInputContainer';
import RegistrationFormContainer from '../src/RegistrationForm/RegistrationFormContainer';

storiesOf('Atom.TextInput', module)
  // Note that the maxLength gets passed through via object spread operator in TextInput
  .add('Without placeholder', () => (
    <TextInput
     name="name"
     label="Name"
     onChange={() => {}}
     maxLength={5} />
  ))

  .add('With placeholder', () => (
    <TextInput
     name="name"
     label="Name"
     onChange={() => {}}
     placeholder="Enter your name"
     maxLength={5} />
  ));

storiesOf('Atom.ProgressBar', module)
  .add('Red at 10% complete', () => (
    <ProgressBar percent={10} />
  ))

  .add('Light green at 60% complete', () => (
    <ProgressBar percent={60} />
  ))

  .add('Dark green at 100% complete', () => (
    <ProgressBar percent={100} />
  ));

storiesOf('Molecule.PasswordInput', module)
  .add('simple', () => (
    <PasswordInputContainer
      maxLength={20} />
  ))
  .add('with placeholder', () => (
    <PasswordInputContainer
      placeholder="Enter password"
      maxLength={20} />
  ))
  .add('with show password', () => (
    <PasswordInputContainer
      placeholder="Enter password"
      showVisibilityToggle={true}
      maxLength={20} />
  ))
  .add('with password quality', () => (
    <PasswordInputContainer
      showQuality={true}
      maxLength={20} />
  ))
  .add('with tips', () => (
    <PasswordInputContainer
      placeholder="Enter password"
      showTips={true}
      maxLength={20}
      minLength={8} />
  ))
  .add('with everything enabled', () => (
    <PasswordInputContainer
      placeholder="Enter password"
      showVisibilityToggle={true}
      showTips={true}
      showQuality={true}
      showTips={true}
      minLength={8}
      maxLength={20} />
  ))

storiesOf('Organisms.RegistrationForm', module)
  .add('renders', () => (
    <RegistrationFormContainer />
  ))
