import React, {PropTypes} from 'react';

const PropDocumentation = ({props}) => {
  let propKeys = [];
  for (var property in props) {
    if (props.hasOwnProperty(property)) {
      propKeys.push(property);
    }
  }

  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
      {
        propKeys.map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{props[key].description}</td>
              <td>{props[key].type.name}</td>
              <td>{props[key].required && "X"}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  )
}

PropDocumentation.propTypes = {
  props: PropTypes.object.isRequired
};

export default PropDocumentation;
