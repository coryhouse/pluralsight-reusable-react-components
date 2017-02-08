import React from 'react';
import PropDocumentation from '../PropDocumentation';
import Title from 'react-title-component';
import Example from '../Example';
import {parse} from 'react-docgen';
import PasswordInputCode from '!raw!pluralsight-ui/PasswordInput/PasswordInput';
import ExampleAllFeatures from './ExampleAllFeatures';
import ExampleAllFeaturesCode from '!raw!./ExampleAllFeatures';

const info = parse(PasswordInputCode);

const PasswordInputPage = () => {
  return (
    <div>
      <Title render={(previousTitle) => `${previousTitle} PasswordInput`} />
      <h2>PasswordInput</h2>
      <p>{info.description}</p>
      <h3>Examples</h3>

      <Example code={ExampleAllFeaturesCode}><ExampleAllFeatures /></Example>

      <h3>Props</h3>
      <PropDocumentation props={info.props} />
    </div>
  )
};

export default PasswordInputPage;
