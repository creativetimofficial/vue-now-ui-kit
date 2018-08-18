import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/now-ui-kit.scss';
import '@/assets/demo/demo.css';
import globalDirectives from './globalDirectives';
import globalMixins from './globalMixins';
import globalComponents from './globalComponents';
import VueLazyload from 'vue-lazyload'

export default {
    install(Vue) {
        Vue.use(globalDirectives);
        Vue.use(globalMixins);
        Vue.use(globalComponents);
        Vue.use(VueLazyload, {
          observer: true,
          // optional
          observerOptions: {
            rootMargin: '0px',
            threshold: 0.1
          }
        });
    }
}
