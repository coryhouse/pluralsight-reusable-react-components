import React from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import code from '!raw-loader!pluralsight-ui/ProgressBar/ProgressBar';
import Example10Percent from './Example10Percent';
import Example10PercentCode from '!raw-loader!./Example10Percent';
import Example70Percent from './Example70Percent';
import Example70PercentCode from '!raw-loader!./Example70Percent';
import Example100Percent from './Example100Percent';
import Example100PercentCode from '!raw-loader!./Example100Percent';

const ProgressBarPage = () => {
  return (
    <ComponentPage
      name="ProgressBar"
      code={code}
      examples={[
        <Example key="Example10Percent" code={Example10PercentCode}><Example10Percent /></Example>,
        <Example key="Example70Percent" code={Example70PercentCode}><Example70Percent /></Example>,
        <Example key="Example100Percent" code={Example100PercentCode}><Example100Percent /></Example>
      ]} />
  )
};

export default ProgressBarPage;
