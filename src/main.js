import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Element from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'


import 'element-ui/lib/theme-chalk/index.css';

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)


Vue.use(Element, { locale })
locale.use(lang)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
