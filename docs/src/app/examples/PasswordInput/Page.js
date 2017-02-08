import React from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import PasswordInputCode from '!raw!pluralsight-ui/PasswordInput/PasswordInput';
import ExampleAllFeatures from './ExampleAllFeatures';
import ExampleAllFeaturesCode from '!raw!./ExampleAllFeatures';

const PasswordInputPage = () => {
  return (
    <ComponentPage
      name="PasswordInput"
      code={PasswordInputCode}
      examples={[
        <Example key="ExampleAllFeatures" code={ExampleAllFeaturesCode}><ExampleAllFeatures /></Example>
      ]} />
  )
};

export default PasswordInputPage;
