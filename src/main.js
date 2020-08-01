import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.use(ElementUI); 
 Vue.use(Button)
 Vue.use(Select)

new Vue({
  render: h => h(App),
}).$mount('#app')
