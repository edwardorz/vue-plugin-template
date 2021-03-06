import {{library}} from './Plugin.vue'

{{#if_eq type "component"}}
export default {{library}}
{{else}}
{{ library }}.install = function (Vue, options) {

  {{#if_eq type "global"}}
  Vue.myGlobalMethod = function () {
    // some logic ...
  }
  {{else if_eq type "directive"}}
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // some logic ...
    }
  })
  {{else if_eq type "mixin"}}
  Vue.mixin({
    created: function () {
      // some logic ...
    }
  })
  {{else if_eq type "instance"}}
  Vue.prototype.$myMethod = function (methodOptions) {
    // some logic ...
  }
  {{/if_eq}}

}

export default {{library}}
{{/if_eq}}