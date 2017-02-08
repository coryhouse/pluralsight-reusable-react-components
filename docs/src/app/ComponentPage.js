import React, {PropTypes} from 'react';
import PropDocumentation from './PropDocumentation';
import Title from 'react-title-component';
import {parse} from 'react-docgen';

const ComponentPage = ({name, code, examples}) => {
  const info = parse(code);

  return (
    <div>
      <Title render={(previousTitle) => `${previousTitle} ${name}`} />
      <h2>{name}</h2>
      <p>{info.description}</p>

      <h3>Examples</h3>
      {
        examples.map(example => {
          return example;
        })
      }

      <h3>Props</h3>
      <PropDocumentation props={info.props} />
    </div>
  )
};

ComponentPage.propTypes = {
  /**
   * Component code in string format
   */
  code: PropTypes.string,
  /**
   * Array of example components
   */
  examples: PropTypes.array
};

export default ComponentPage;
