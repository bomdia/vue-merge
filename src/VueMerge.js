import Vue from 'vue'
import deepClone from 'lodash.clonedeep'

let DEBUG_FUNCTIONS = true

const log = function (...args) {
  if (DEBUG_FUNCTIONS) {
    const clonedArgs = deepClone(args)
    console.log(...clonedArgs)
  }
}

const isNumber = function (value) {
  try {
    if (typeof value === 'boolean' || typeof value === 'object' || typeof value === 'function' || value === '' || isNaN(Number(value))) return false
    return true
  } catch (err) {
    return false
  }
}

const recurseObj = function (obj, path) {
  if (path.length === 0) return obj
  const recurse = path.split('.')
  let retVal = obj
  for (const key of recurse) {
    if (retVal) {
      retVal = retVal[key]
    }
  }
  return retVal
}

const checkSafePaths = function (path, safePaths) {
  // path: prop1.0.prop3.prop2
  // safePaths: *              result = true
  // safePaths: prop1.0        result = false
  // safePaths: prop1.0.*      result = true
  if (typeof path !== 'string') { path = '' }
  for (const curSafePath of safePaths) {
    if (
      curSafePath === '*' ||
      path === curSafePath
    ) {
      return true
    }
    const indexOf = curSafePath.indexOf('.*')
    if (indexOf !== -1) {
      const startPath = curSafePath.substr(0, indexOf)
      const indexOfPath = path.indexOf(startPath)
      const pathToTest = indexOfPath > -1 ? path.substr(0, indexOfPath) : path
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
}

const setCorrectEmpty = function (obj, key, nextKeyIsNum) {
  log('setCorrectEmpty(', 'obj =', obj, 'key =', key, 'nextKeyisNum=', nextKeyIsNum, ')')
  log('nextKeyIsNum:', nextKeyIsNum)
  if (!nextKeyIsNum) {
    Vue.set(obj, key, {})
  } else {
    Vue.set(obj, key, [])
  }
}

const ensureProperty = function (options, property) {
  let newObj
  if (typeof options !== 'object' || typeof options === 'undefined' || options === null) {
    newObj = {}
  } else {
    newObj = deepClone(options)
  }
  for (const prop of Object.keys(property)) {
    if (typeof newObj[prop] === 'undefined' || newObj[prop] === null) {
      newObj[prop] = property[prop]
    } else {
      if (typeof newObj[prop] !== typeof property[prop]) {
        newObj[prop] = property[prop]
      }
    }
  }
  return newObj
}

const mergeObj = function (obj, value, { ignoreNull, overwrite, safePaths }, recurseObj = { parent: '', currentPath: [] }) {
  if (typeof value === 'object' && value !== null) {
    for (const key of Object.keys(value)) {
      recurseObj.currentPath.push(key)
      recurseObj.parent = key
      if (checkSafePaths(recurseObj.currentPath.join('.'), safePaths)) {
        if (typeof obj[key] === 'undefined' || typeof obj[key] !== typeof value[key]) {
          if (typeof value[key] === 'object' && value[key] !== null) {
            let objWasEmpty = true
            for (const nextProp of Object.keys(value[key])) {
              setCorrectEmpty(obj, key, isNumber(nextProp))
              objWasEmpty = false
              break
            }
            if (objWasEmpty) {
              setCorrectEmpty(obj, key, Array.isArray(value[key]))
            }
          }
        }
        let nextObj = obj[key]
        if (typeof nextObj === 'object') {
          if (Array.isArray(nextObj)) {
            recurseObj.parentArray = obj
            if (!overwrite) {
              recurseObj.offset = nextObj.length
            }
          }
        } else {
          nextObj = obj
        }

        mergeObj(nextObj, value[key], { ignoreNull, overwrite, safePaths }, recurseObj)
      }
      recurseObj.currentPath.pop()
    }
  } else if (!(ignoreNull && (value === null || typeof value === 'undefined')) && typeof recurseObj.parent === 'string' && recurseObj.parent !== '') {
    log('mergeObj Called: obj', obj, 'value', value, 'recurseObj', recurseObj)
    let curKey = recurseObj.parent

    if (typeof obj === 'object' && Array.isArray(obj) && !overwrite && isNumber(curKey)) {
      curKey = Number(curKey) + recurseObj.offset
    }
    if (typeof value === 'undefined') {
      let deleteObj = obj
      if (recurseObj.parentArray) {
        deleteObj = recurseObj.parentArray
        delete recurseObj.parentArray
      }
      Vue.delete(deleteObj, curKey)
    } else {
      Vue.set(obj, curKey, value)
    }
  }
}

export default function VueMerge (obj, value, options = {}) {
  options = ensureProperty(options, { ignoreNull: false, overwrite: false, startAt: '', safePaths: ['*'], clone: false, logs: false })
  DEBUG_FUNCTIONS = options.logs
  log('VueMerge Called: obj', obj, 'value', value, 'options', options)

  const curObj = options.clone ? deepClone(obj) : obj

  const recurse = options.startAt.split('.')
  const currentPath = []
  if (options.startAt.length > 0) {
    let level = 0
    let newObj = curObj
    for (const currentKey of recurse) {
      currentPath.push(currentKey)

      if (checkSafePaths(currentPath.join('.'), options.safePaths)) { return {} }

      if (!curObj[currentKey] && level !== recurse.length - 1) {
        setCorrectEmpty(newObj, currentKey, isNumber(recurse[level + 1]))
      }
      if (level === recurse.length - 1) {
        const newVal = {}
        newVal[currentKey] = value
        mergeObj(newObj, newVal, options, { parent: currentKey, currentPath, append: {} })
      } else {
        level++
        newObj = newObj[currentKey]
      }
    }
  } else if (typeof value !== 'object') {
    return {}
  } else {
    mergeObj(curObj, value, options)
  }
  return curObj
}
