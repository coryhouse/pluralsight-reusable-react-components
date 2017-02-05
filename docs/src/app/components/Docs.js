import React from 'react';
import PropDocumentation from './PropDocumentation';
import Title from 'react-title-component';
import progressBarCode from '!raw!material-ui/ProgressBar/ProgressBar';
import Example10Percent from './ProgressBar/Example10Percent';
import Example10PercentCode from '!raw!./ProgressBar/Example10Percent';
import Example70Percent from './ProgressBar/Example70Percent';
import Example70PercentCode from '!raw!./ProgressBar/Example70Percent';
import Example100Percent from './ProgressBar/Example100Percent';
import Example100PercentCode from '!raw!./ProgressBar/Example100Percent';
import PasswordInputExampleCode from '!raw!./PasswordInputExample';
import {parse} from 'react-docgen';

// console.log(PasswordInputExampleCode);
const progressBarInfo = parse(progressBarCode);

export default class Docs extends React.Component {
  render() {
    return (
      <div>
        <Title render={(previousTitle) => `Pluralsight UI Docs - ${previousTitle}`} />
        <h2>ProgressBar</h2>
        <p>{progressBarInfo.description}</p>
        <h3>Examples</h3>
        <p>10%</p>
        <Example10Percent />
        <pre>{Example10PercentCode}</pre>
        <p>70%</p>
        <Example70Percent />
        <p>100%</p>
        <Example100Percent />

        <h3>Props</h3>
        <PropDocumentation props={progressBarInfo.props} />
      </div>
    )
  }
}
