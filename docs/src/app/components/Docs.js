import React from 'react';
import PropDocumentation from './PropDocumentation';
import Title from 'react-title-component';
import progressBarCode from '!raw!pluralsight-ui/ProgressBar/ProgressBar';
import Example10Percent from './ProgressBar/Example10Percent';
import Example10PercentCode from '!raw!./ProgressBar/Example10Percent';
import Example70Percent from './ProgressBar/Example70Percent';
import Example70PercentCode from '!raw!./ProgressBar/Example70Percent';
import Example100Percent from './ProgressBar/Example100Percent';
import Example100PercentCode from '!raw!./ProgressBar/Example100Percent';
import Example from './Example';
import {parse} from 'react-docgen';

const progressBarInfo = parse(progressBarCode);

export default class Docs extends React.Component {
  render() {
    return (
      <div>
        <Title render={(previousTitle) => `Pluralsight UI Docs`} />
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
  }
}
