((proto) => {
  const forEach = function (cb) {
    const obj = this
    return Object.getOwnPropertyNames(this).forEach(key => cb(obj[key], key, obj))
  }
  
  if (proto.forEach === undefined) {
    Object.defineProperty(proto, "forEach", {
      value: forEach
    })
  }
})(Object.prototype)
