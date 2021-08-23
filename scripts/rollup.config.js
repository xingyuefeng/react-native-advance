var path = require("path");
var fs = require("fs");
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const cwd = process.cwd();
const root = path.resolve('.');

function getAllPackages() {
  const files = fs.readdirSync(path.join(cwd, '/packages'))
  return files
}

function getOptions(pkg) {
  // 每个包下的package.json
  const pkgJSON = require(path.join(cwd, 'packages', pkg, 'package.json'));
  const { dependencies = {}, devDependencies = {}, peerDependencies = {}, main } = pkgJSON;
  return {
    input: path.resolve('.') + '/packages/CalendarManager/index.js',
    input:path.join(cwd, '/packages', pkg, '/index.js'),
    external: Object.keys(devDependencies).concat(Object.keys(peerDependencies)),
    output: {
      file: path.join(cwd, 'packages', pkg, main),
      format: 'es',
      exports: "auto",
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
    watch: {}
  }
}


const packages = getAllPackages()

const options = packages.map(pkg => {
  const option = getOptions(pkg)
  return option
})

export default options;