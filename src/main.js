import Vue from 'vue'
import App from './App.vue'
import { store } from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
Vue.config.productionTip = false

Vue.use(ElementUI, { locale });
console.log("HWEW")

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
