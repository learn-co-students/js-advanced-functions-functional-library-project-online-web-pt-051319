const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, callback) {
      Object.values(obj).forEach(value => callback(value))
      return obj
    },

    map: function(obj, callback) {
      return Object.values(obj).map(value => callback(value))
    },

    reduce: function(array, callback, initial) {
      const a = !!initial ? [initial, ...array] : array.slice();
      return a.reduce((acc, value) => callback(acc, value))
    },

    find: function(obj, callback) {
      return Object.values(obj).find(value => callback(value)) || undefined
    },

    filter : function(array, callback) {
      return array.filter(value => callback(value))
    },

    size: function(obj) {
      return Object.values(obj).length
    },

    first: function(array, count) {
      return !!count ? array.slice(0, count) : array[0]
    },

    last: function(array, count) {
      return !!count ? array.slice(array.length - count) : array[array.length - 1]
    },

    compact: function(array) {
      return array.filter(value => !!value)
    },

    sortBy: function(obj, callback) {
      return Object.values(obj).sort((v1, v2) => callback(v1) - callback(v2))
    },

    flatten: function(array, depth = Infinity) {
      depth = depth === true ? 1 : depth
      return depth > 0 ? array.reduce((flat, val) => flat.concat(Array.isArray(val) ? fi.flatten(val, depth - 1 ) : val), [])
        : array.slice()
    },

    uniq: function(array, sorted = false, callback = (val) => val) {
      const morphedArray = array.map(val => callback(val))
      return array.filter((val, i) => i == morphedArray.indexOf(callback(val)))
    },

    keys: function(object) { return Object.keys(object) },

    values: function(object) { return Object.values(object)},

    functions: function(object) {
      return Object.getOwnPropertyNames(object).filter((prop, i) => typeof object[prop] == 'function')
    }

  }
})()

fi.libraryMethod()

