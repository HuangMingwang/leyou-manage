import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './config/http'
import MyComponent from './components/MyComponent'
import qs from 'qs'
import './assets/material.css';
import './assets/googleapis.css';
import './assets/material+icon.css';
import './views/public_css/index.css'

// 导入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入并使用树形组件--用于商品分类
import TreeTable from 'vue-table-with-tree-grid'
// Vue.use(TreeTable)
Vue.component('tree-table', TreeTable)

Vue.prototype.$qs=qs;
Vue.use(MyComponent);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
