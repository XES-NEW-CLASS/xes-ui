/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
const version = '0.0.1'
const components = [
  Button
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button
}
export default {
  install,
  version
}
