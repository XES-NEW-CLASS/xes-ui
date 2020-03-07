import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import vuxes from '../packages/index'
// import '../lib/theme-default/index.css'
import '../packages/theme-default/src/index.less'

Vue.component('demo-block', demoBlock)
Vue.use(vuxes)

const Demos = []

function importDemos (r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}
importDemos(require.context('@/demos', true, /\.vue$/))

Demos.map(component => Vue.component(component.name, component))

// Promise Catch不报错
window.addEventListener('unhandledrejection', event => event.preventDefault())

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
