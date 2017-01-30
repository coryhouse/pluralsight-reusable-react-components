import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TextInput from '../TextInput/TextInput';
import ProgressBar from '../ProgressBar/ProgressBar';
import PasswordInput from '../PasswordInput/PasswordInput';
import RegistrationFormContainer from '../RegistrationFormContainer/RegistrationFormContainer';

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
    <ProgressBar percentComplete={10} />
  ))

  .add('Light green at 60% complete', () => (
    <ProgressBar percentComplete={60} />
  ))

  .add('Dark green at 100% complete', () => (
    <ProgressBar percentComplete={100} />
  ));

storiesOf('Molecule.PasswordInput', module)
  .add('simple', () => (
    <PasswordInput
      maxLength={20}
      value="">
    </PasswordInput>
  ))
  .add('with placeholder', () => (
    <PasswordInput
      placeholder="Enter password"
      maxLength={20}>
    </PasswordInput>
  ))
  .add('with show password', () => (
    <PasswordInput
      placeholder="Enter password"
      showVisibilityToggle={true}
      maxLength={20}>
    </PasswordInput>
  ))
  .add('with password quality', () => (
    <PasswordInput
      showQuality={true}
      maxLength={20}>
    </PasswordInput>
  ))
  .add('with tips', () => (
    <PasswordInput
      placeholder="Enter password"
      showTips={true}
      maxLength={20}>
    </PasswordInput>
  ))
  .add('with everything enabled', () => (
    <PasswordInput
      placeholder="Enter password"
      showVisibilityToggle={true}
      showTips={true}
      showQuality={true}
      showTips={true}
      minLength={5}
      maxLength={20}>
    </PasswordInput>
  ))
  .add('with logger HOC', () => (
    <PasswordInputWithLogger
      maxLength={50}
      showTips={true} />
  ))

storiesOf('Organisms.RegistrationForm', module)
  .add('renders', () => (
    <RegistrationFormContainer />
  ))