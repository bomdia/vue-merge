import VueMerge_ from './VueMerge'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.merge = VueMerge_
}

// Create module definition for Vue.use()
const plugin = {
  install,
  name: '@wtfcode/vue-merge'
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin

export const VueMerge = VueMerge_
