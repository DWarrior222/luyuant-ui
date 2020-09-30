const path = require('path');

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  examples: path.resolve(__dirname, '../examples'),
  packages: path.resolve(__dirname, '../packages'),
  lib: path.resolve(__dirname, '../lib')
}