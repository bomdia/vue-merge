import Vue from 'vue';
import 'lodash.clonedeep';

const log = function (...args) {
};

const isNumber = function (value) {
  try {
    if (value === true || value === false || value === [] || value === '' || isNaN(Number(value))) { return false }
    return true
  } catch (err) {
    return false
  }
};

const recurseObj = function (obj, path) {
  if (path.length === 0) { return obj }
  const recurse = path.split('.');
  let retVal = obj;
  for (const key of recurse) {
    if (retVal) {
      retVal = retVal[key];
    }
  }
  return retVal
};

const setCorrectEmpty = function (obj, key, nextKey) {
  const nextKeyIsNum = isNumber(nextKey);
  if (!nextKeyIsNum) {
    Vue.set(obj, key, {});
  } else {
    Vue.set(obj, key, []);
  }
};

const mergeObj = function (obj, value, { ignoreNull, overwrite }, recurseObj = { parent: '', append: {} }) {
  if (recurseObj && typeof recurseObj.firstCall === 'undefined') {
    recurseObj.firstCall = true;
  } else if (recurseObj && recurseObj.firstCall === true) {
    recurseObj.firstCall = false;
  }
  log('if recurseObj.parent && recurseObj.parent !== \'\' =', recurseObj.parent && recurseObj.parent !== '');
  log('if recurseObj.parentObj && recurseObj.parentObj instanceof Object) =', recurseObj.parentObj && recurseObj.parentObj instanceof Object);
  if (value && value instanceof Object && Object.keys(value).length > 0) {
    let firstKeyFor = true;
    for (const key of Object.keys(value)) {
      if (
        recurseObj.parent && recurseObj.parent !== '' && firstKeyFor && (
          typeof recurseObj.parentObj[recurseObj.parent] === 'undefined' ||
          // typeof obj[key] === 'undefined' ||
          !(recurseObj.parentObj[recurseObj.parent] instanceof Object) ||
          // typeof obj[recurseObj.parent] === 'undefined' ||
          (Array.isArray(recurseObj.parentObj[recurseObj.parent]) && overwrite && Array.isArray(value))
        )
      ) {
        setCorrectEmpty(recurseObj.parentObj, recurseObj.parent, key);
        obj = recurseObj.parentObj[recurseObj.parent];
      }

      recurseObj.append.active = Array.isArray(value);
      if (recurseObj.append.active && !recurseObj.append.recicleObj) {
        recurseObj.append.offset = (Array.isArray(obj) ? obj.length : 0);
        recurseObj.append.recicleObj = true;
        recurseObj.append.elementsNumber = value.length - 1;
        recurseObj.append.position = 0;
      }

      recurseObj.parent = key;
      recurseObj.parentObj = obj;
      log('recurse with obj:', obj, 'key:', key, 'obj[key]', obj[key]);
      mergeObj((typeof obj[key] === 'undefined' || !(obj[key] instanceof Object) ? obj : obj[key]), value[key], { ignoreNull, overwrite }, recurseObj);

      firstKeyFor = false;
    }
  } else if (!(ignoreNull && value === null) && recurseObj.parent && recurseObj.parent !== '' && recurseObj.parentObj && recurseObj.parentObj instanceof Object) {
    log('parentObj:', recurseObj.parentObj, 'parent:', recurseObj.parent, 'value:', value);
    let parent = recurseObj.parent;
    if (recurseObj.append.active) {
      parent = Number(parent) + recurseObj.append.offset;
      if (recurseObj.append.position === recurseObj.append.elementsNumber) {
        recurseObj.append.recicleObj = false;
      } else {
        recurseObj.append.position++;
      }
    }
    Vue.set(recurseObj.parentObj, parent, value);
  }
};

function VueMerge (obj, value, options = { ignoreNull: false, overwrite: false, startAt: '' }) {
  const recurse = options.startAt.split('.');
  let level = 0;
  if (options.startAt.length > 0) {
    log('we have a path:', options.startAt);
    log('newPath:', recurse.slice(0, recurse.length - 1).join('.'));
    recurse.reduce((a, b) => {
      if (typeof a[b] === 'undefined' && level !== recurse.length - 1) {
        setCorrectEmpty(a, b, recurse[level + 1]);
      }
      if (level === recurse.length - 1) {
        const newVal = {};
        newVal[recurse[recurse.length - 1]] = value;
        mergeObj(recurseObj(obj, recurse.slice(0, recurse.length - 1).join('.')), newVal, options);
      } else {
        level++;
        return a[b]
      }
    }, obj);
  } else {
    mergeObj(obj, value, options);
  }
}

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;
  Vue.merge = VueMerge;
}

// Create module definition for Vue.use()
const plugin = {
  install,
  name: '@wtfcode/vue-merge'
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

var VueMerge$1 = VueMerge;

export default plugin;
export { VueMerge$1 as VueMerge };
