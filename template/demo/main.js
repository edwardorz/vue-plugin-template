import Vue from 'vue'
import App from './App'
import {{library}} from '../src'

{{#if_eq type "component"}}
Vue.component('{{name}}', {{library}})
{{else}}
Vue.use({{library}})
{{/if_eq}}
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

