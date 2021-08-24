const rollup = require('rollup');
import options from './rollup.config'

const watcher = rollup.watch(options);

watcher.on('event', ({ result, code, error, ...others }) => {

  if(code === 'START') {
    console.log('开始监听....')
  };

  if(code === 'BUNDLE_START') {
    console.log('开始编译....');
  };

  if(code === 'BUNDLE_END') {
    console.log('编译完成🎉🎉🎉')
  }
  if(code === 'END') {
    console.log('所有包编译完成🎉🎉🎉')
  }
  if(code === 'ERROR') {
    console.log('err:', error);
    result.close();
  } 
});


export default options;