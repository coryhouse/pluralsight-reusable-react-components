import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './Docs';
import {parse} from 'react-docgen';
// const fs = require('fs')
// const path = require('path')
//const currentPath = path.resolve(__dirname, file);

// function getDirectories (srcpath) {
//   return fs.readdirSync(srcpath)
//     .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
// }

const components = [
  {
    name: 'PasswordInput',
    props: {
      'prop1': {
        description: 'desc',
        type: {
          name: 'type name'
        },
        required: true
      }
    },
    examples: [
      {
        component: 'ExampleAllFeatures',
        description: 'Example desc',
        code: 'code here'
      },
      {
        component: 'ExampleJustToggleVisibility',
        description: 'Example desc',
        code: 'code here'
      }
    ]
  },
  {
    name: 'ProgressBar',
    props: {
      'prop1': {
        description: 'desc',
        type: {
          name: 'type name'
        },
        required: true
      }
    },
    examples: [
      {
        component: 'Example10Percent',
        description: 'Example desc',
        code: 'code here'
      },
      {
        component: 'Example70Percent',
        description: 'Example desc',
        code: 'code here'
      },
      {
        component: 'Example100Percent',
        description: 'Example desc',
        code: 'code here'
      }
    ]
  }
];

ReactDOM.render(<Docs components={components} />, document.getElementById('app'));
