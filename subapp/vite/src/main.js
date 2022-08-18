import { createApp } from 'vue'
import App from './App.vue'
// import './public-path';
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
// createApp(App).mount('#app')

function render(props = {}) {
  const { container } = props;
  createApp(App).mount(container ? container.querySelector('#vite') : '#vite')
}



export async function bootstrap() {
  console.log('react app bootstraped');
}




export async function mount(props) {
  render(props);
  console.log('[vue] props from main framework', props);

  // const { container } = props;
  // let instance = createApp(App);
  // instance.mount(container ? container.querySelector('#app') : '#app')
  // ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  // ReactDOM.unmountComponentAtNode(
  //   props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  // );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
