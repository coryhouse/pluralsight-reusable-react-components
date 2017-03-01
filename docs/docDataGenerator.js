var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var {parse} = require('react-docgen')

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isFile())
}

function writeFile(filename, content) {
  fs.writeFile(path.join(__dirname, filename), content, function (err) {
    if (err) return console.log(err);
    console.log(chalk.green("Example data saved."));
  });
}

function readFile(filePath, callback) {
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
}

function generate(componentsPath, examplesPath) {
  // The object we'll stringify to a file
  const componentMetaData = [];
  const exampleFolders = getDirectories(examplesPath);

  exampleFolders.map(dir => {
    var fullPath = path.join(examplesPath, dir);
    var files = getFiles(fullPath);
    const example = {
      component: dir, // by convention, each folder of examples should be named after the component.
      examples: []
    };

    files.map(file => {
      let code = '';
      readFile(path.join(examplesPath, dir, file), content => {
        code = content;
      });
      console.log(code);
      example.examples.push({
        component: file,
        path: fullPath,
        description: 'desc',
        code: code
      });
    });
    componentMetaData.push(example);
  });

  writeFile('componentMetadata.js', "exports = " + JSON.stringify(componentMetaData));
}

const examplesPath = path.join(__dirname, 'src', 'app', 'examples');
const componentsPath = path.join(__dirname, '../src');
generate(componentsPath, examplesPath);
