import DemoBlock from './demo-block/demo-block'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import * as Components from '@/components/index'
import './doc_styles.scss'
import getElements from './utils/get-sidebar-elements';
import ElementUI from '../../node_modules/element-ui';
import KitPlugin from '../../src/plugins/now-ui-kit';
import '../../node_modules/element-ui/packages/theme-chalk/lib/index.css';

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  locale.use(lang);
  Vue.component('demo-block', DemoBlock);
  Vue.use(ElementUI);
  Vue.use(KitPlugin);
  let componentEntries = Object.entries(Components);
  for(let [name, component] of componentEntries) {
    Vue.component(component.name || name, component)
  }
  Vue.prototype.$docs = Object.values(Components);
  let docComponents = getElements(componentEntries);
  siteData.themeConfig.sidebar = siteData.themeConfig.sidebar.concat(docComponents);
}
