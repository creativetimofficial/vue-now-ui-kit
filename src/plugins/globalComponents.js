import { Parallax } from '../components';
/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax);
  }
};

export default globalComponents;
