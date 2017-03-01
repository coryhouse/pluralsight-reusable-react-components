import React, {PropTypes} from 'react';
import Title from 'react-title-component';
import ProgressBarPage from './examples/ProgressBar/Page';
import PasswordInputPage from './examples/PasswordInput/Page';
import Example from './Example';
import PropDocumentation from './PropDocumentation';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComponent: this.props.components[0]
    };
  }

  setCurrentComponent(event, componentName) {
    const selectedComponent = this.props.components.find(component => component.name == componentName);
    this.setState({currentComponent: selectedComponent});
    event.preventDefault();
  }

  render() {
    const component = this.state.currentComponent;
    const {components} = this.props;
    return (
      <div>
        <div id="navigation">
          <ul className="unstyled">
            {
              components.map(component => {
                return (
                  <li key={component.name}>
                    <a href="#" onClick={event => this.setCurrentComponent(event, component.name)}>
                      {component.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
      </div>

      <div id="page-wrapper">
        <Title render={(previousTitle) => `${previousTitle} ${component.name}`} />
        <h2>{component.name}</h2>
        <p>{component.description}</p>

        <h3>Examples</h3>
        {
          component.examples.map(example => {
            const ExampleComponent = example.component;
            return <Example key={example.component} description={example.description} code={example.code}><ExampleComponent /></Example>
          })
        }

        <h3>Props</h3>
        <PropDocumentation props={component.props} />
      </div>

        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}

Docs.propTypes = {
  components: PropTypes.array.isRequired
}
