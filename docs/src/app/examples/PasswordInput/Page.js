import React from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import PasswordInputCode from '!raw-loader!pluralsight-ui/PasswordInput/PasswordInput';
import ExampleAllFeatures from './ExampleAllFeatures';
import ExampleAllFeaturesCode from '!raw-loader!./ExampleAllFeatures';
import ExampleJustToggleVisibility from './ExampleJustToggleVisibility';
import ExampleJustToggleVisibilityCode from '!raw-loader!./ExampleJustToggleVisibility';

const PasswordInputPage = () => {
  return (
    <ComponentPage
      name="PasswordInput"
      code={PasswordInputCode}
      examples={[
        <Example key="ExampleAllFeatures" code={ExampleAllFeaturesCode}><ExampleAllFeatures /></Example>,
        <Example key="ExampleJustToggleVisibility" code={ExampleJustToggleVisibilityCode}><ExampleJustToggleVisibility /></Example>
      ]} />
  )
};

export default PasswordInputPage;
