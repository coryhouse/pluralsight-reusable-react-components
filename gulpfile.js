// This is solely for BlueKit doc generation
require('babel-register')

const gulp = require('gulp');
const path = require('path');
const createBlueKit = require('../src/createBlueKit').default

createBlueKit({
  // your directory where components are located
  baseDir: `${__dirname}/src/browser`,
  // relative paths from base dir where to look for components
  paths: ['./components/', './auth'],
  // set to true when providing simple components such as `export default function MyComponent() { <div>Hello</div> }`
  noSpecialReplacements: true
});
