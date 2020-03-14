/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import Message from './message'
import MessageTest from './message-test'
import Popover from './popover'
import Confirm from './confirm'
const version = '0.0.1'
const components = [
  Button,
  MessageTest,
  Popover
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  Vue.prototype.$messageTest = MessageTest
  Vue.prototype.$message = Message
  Vue.prototype.$confirm = Confirm
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button,
  Message,
  MessageTest,
  Popover,
  Confirm
}
export default {
  install,
  version
}
