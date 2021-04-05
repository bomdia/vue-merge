import Vue from 'vue';
import deepClone from 'lodash.clonedeep';

const log = function (logs, ...args) {
  if (logs) {
    const clonedArgs = deepClone(args);
    const newArgs = [];
    for (const arg of clonedArgs) {
      if (typeof arg === 'object') {
        newArgs.push(JSON.stringify(arg, null, 2));
      } else {
        newArgs.push(arg);
      }
    }
    console.log(...newArgs);
  }
};

const isNumber = function (value) {
  try {
    if (typeof value === 'boolean' || typeof value === 'object' || typeof value === 'function' || value === '' || isNaN(Number(value))) { return false }
    return true
  } catch (err) {
    return false
  }
};

const checkSafePaths = function (path, safePaths) {
  // path: prop1.0.prop3.prop2
  // safePaths: *              result = true
  // safePaths: prop1.0        result = false
  // safePaths: prop1.0.*      result = true
  if (typeof path !== 'string') { path = ''; }
  for (const curSafePath of safePaths) {
    if (
      curSafePath === '*' ||
      path === curSafePath
    ) {
      return true
    }
    const indexOf = curSafePath.indexOf('.*');
    if (indexOf !== -1) {
      const startPath = curSafePath.substr(0, indexOf);
      const indexOfPath = path.indexOf(startPath);
      const pathToTest = indexOfPath > -1 ? path.substr(0, indexOfPath) : path;
      if (startPath.startsWith(pathToTest)) {
        return true
      }
    } else {
      if (curSafePath.startsWith(path)) {
        return true
      }
    }
  }
  return false
};

const setCorrectEmpty = function (obj, key, nextKeyIsNum, logs) {
  log(logs, 'setCorrectEmpty(', 'obj =', obj, 'key =', key, 'nextKeyisNum=', nextKeyIsNum, ')');
  log(logs, 'nextKeyIsNum:', nextKeyIsNum);
  if (!nextKeyIsNum) {
    Vue.set(obj, key, {});
  } else {
    Vue.set(obj, key, []);
  }
};

const ensureProperty = function (options, property) {
  let newObj;
  if (typeof options !== 'object' || typeof options === 'undefined' || options === null) {
    newObj = {};
  } else {
    newObj = deepClone(options);
  }
  for (const prop of Object.keys(property)) {
    if (typeof newObj[prop] === 'undefined' || newObj[prop] === null) {
      newObj[prop] = property[prop];
    } else {
      if (typeof newObj[prop] !== typeof property[prop]) {
        newObj[prop] = property[prop];
      }
    }
  }
  return newObj
};

const mergeObj = function (obj, value, { ignoreNull, ignoreUndefined, overwrite, replaceArray, safePaths, logs }, recurseObj = { currentPath: [] }) {
  if (typeof value === 'object' && value !== null) {
    for (const key of Object.keys(value)) {
      recurseObj.currentPath.push(key);
      log(logs, 'mergeObj current iteration:', recurseObj);
      log(logs, 'mergeObj current obj:', obj);
      log(logs, 'mergeObj current value:', value);
      if (checkSafePaths(recurseObj.currentPath.join('.'), safePaths)) {
        if (typeof obj[key] === 'undefined' || typeof obj[key] !== typeof value[key] || obj[key] === null) {
          if (typeof value[key] === 'object' && value[key] !== null) {
            let objWasEmpty = true;
            if (Object.keys(value[key]) > 0) {
              const firstProp = Object.keys(value[key])[0];
              setCorrectEmpty(obj, key, isNumber(firstProp), logs);
              objWasEmpty = false;
            }
            if (objWasEmpty) {
              setCorrectEmpty(obj, key, Array.isArray(value[key]), logs);
            }
          }
        }

        const newValue = value[key];
        log(logs, 'mergeObj obj:', obj);
        log(logs, 'mergeObj next value:', value[key]);

        if (
          (!ignoreNull && typeof newValue === 'object' && newValue === null) ||
          typeof newValue === 'boolean' ||
          typeof newValue === 'number' ||
          typeof newValue === 'string' ||
          typeof newValue === 'symbol' ||
          (replaceArray && Array.isArray(obj[key])) ||
          (overwrite && typeof newValue === 'object' && (Object.keys(newValue).length === 0 || Array.isArray(newValue)))
        ) { // set cases
          log(logs, 'mergeObj setting');
          log(logs, 'mergeObj obj:', obj);
          log(logs, 'mergeObj key:', key);
          log(logs, 'mergeObj newValue:', newValue);
          Vue.set(obj, key, newValue);
        } else if (!ignoreUndefined && typeof newValue === 'undefined') { // remove cases
          log(logs, 'mergeObj removing');
          log(logs, 'mergeObj obj:', obj);
          log(logs, 'mergeObj key:', key);
          log(logs, 'mergeObj newValue:', newValue);
          Vue.delete(obj, key);
        } else if (typeof newValue === 'object' && Object.keys(newValue).length > 0) {
          if (!overwrite && Array.isArray(newValue) && Array.isArray(obj[key])) { // append cases
            for (const val of newValue) {
              log(logs, 'mergeObj appending');
              log(logs, 'mergeObj obj[key]:', obj[key]);
              log(logs, 'mergeObj obj[key].length:', obj[key].length);
              log(logs, 'mergeObj val:', val);
              Vue.set(obj[key], obj[key].length, val);
            }
          } else { // recurse cases
            log(logs, 'mergeObj recursing to next');
            mergeObj(obj[key], newValue, { ignoreNull, ignoreUndefined, overwrite, replaceArray, safePaths, logs }, recurseObj);
          }
        }
      }
      recurseObj.currentPath.pop();
    }
  }
};

function VueMerge$1 (obj, value, options = {}) {
  options = ensureProperty(options, { ignoreNull: false, ignoreUndefined: false, overwrite: false, replaceArray: false, startAt: '', safePaths: ['*'], clone: false, logs: false });
  log(options.logs, 'VueMerge Called');
  log(options.logs, 'obj:', obj);
  log(options.logs, 'value:', value);
  log(options.logs, 'options:', options);

  const curObj = options.clone ? deepClone(obj) : obj;

  const recurse = options.startAt.split('.');
  const currentPath = [];
  if (options.startAt.length > 0) {
    log(options.logs, 'VueMerge recursing startAt:', options.startAt);
    let level = 0;
    let newObj = curObj;
    for (const currentKey of recurse) {
      currentPath.push(currentKey);
      log(options.logs, 'Recursing(', checkSafePaths(currentPath.join('.'), options.safePaths), ') at currentPath:', currentPath.join('.'), 'safePaths:', options.safePaths);
      if (!checkSafePaths(currentPath.join('.'), options.safePaths)) { return {} }

      if (!newObj[currentKey] && level !== recurse.length - 1) {
        setCorrectEmpty(newObj, currentKey, isNumber(recurse[level + 1]), options.logs);
      }
      if (level === recurse.length - 1) {
        const newVal = {};
        newVal[currentKey] = value;
        log(options.logs, 'Calling mergeObj with obj:', newObj, 'value:', newVal, 'options:', options);
        mergeObj(newObj, newVal, options);
      } else {
        level++;
        newObj = newObj[currentKey];
      }
    }
  } else if (typeof value !== 'object') {
    return {}
  } else {
    log(options.logs, 'Calling mergeObj with obj:', curObj, 'value:', value, 'options:', options);
    mergeObj(curObj, value, options);
  }
  return curObj
}

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;
  Vue.merge = VueMerge$1;
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

const VueMerge = VueMerge$1;

export default plugin;
export { VueMerge };
