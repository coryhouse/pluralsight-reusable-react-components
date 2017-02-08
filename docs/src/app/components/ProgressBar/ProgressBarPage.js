import React from 'react';
import PropDocumentation from '../PropDocumentation';
import Title from 'react-title-component';
import Example from '../Example';
import {parse} from 'react-docgen';
import progressBarCode from '!raw!pluralsight-ui/ProgressBar/ProgressBar';
import Example10Percent from './Example10Percent';
import Example10PercentCode from '!raw!./Example10Percent';
import Example70Percent from './Example70Percent';
import Example70PercentCode from '!raw!./Example70Percent';
import Example100Percent from './Example100Percent';
import Example100PercentCode from '!raw!./Example100Percent';

const progressBarInfo = parse(progressBarCode);

const ProgressBarPage = () => {
  return (
    <div>
      <Title render={(previousTitle) => `${previousTitle} ProgressBar`} />
      <h2>ProgressBar</h2>
      <p>{progressBarInfo.description}</p>
      <h3>Examples</h3>

      <Example code={Example10PercentCode}><Example10Percent /></Example>
      <Example code={Example70PercentCode}><Example70Percent /></Example>
      <Example code={Example100PercentCode}><Example100Percent /></Example>

      <h3>Props</h3>
      <PropDocumentation props={progressBarInfo.props} />
    </div>
  )
};

export default ProgressBarPage;
