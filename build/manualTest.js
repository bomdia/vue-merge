const VueMerge = require('../dist/vue-merge.umd.js').VueMerge
const Issue3 = require('./issue3Test')
// const acsm = require('./acsm.js')
// const actionList = require('./actionList.js')
// const loginMsg = require('./LOGIN_MSG')
// const logoutMsg = require('./LOGOUT_MSG')
const logs = true
// console.log('START OBJECT:', JSON.stringify(acsm.servers, null, 2))
// console.log('MEDUM OBJECT:', JSON.stringify(VueMerge(acsm.servers, loginMsg.targetDiff, { logs, overwrite: false, startAt: 'instances.' + loginMsg.targetSpace + '.' + loginMsg.targetServer }), null, 2))
// console.log('FINAL OBJECT:', JSON.stringify(VueMerge(acsm.servers, logoutMsg.targetDiff, { logs, overwrite: false, startAt: 'instances.' + logoutMsg.targetSpace + '.' + logoutMsg.targetServer }), null, 2))

console.log('START OBJECT:', JSON.stringify(Issue3.obj, null, 2))
console.log('FINAL OBJECT:', JSON.stringify(VueMerge(
  Issue3.obj,
  Issue3.value,
  {
    logs,
    replaceArray: false
  }
), null, 2))
