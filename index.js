module.exports = function series(fns, context, callback) {
  if (!callback) {
    if (typeof context === 'function') {
      callback = context
      context = null
    } else {
      callback = noop
    }
  }

  var length = fns.length
  if (!length) return callback();

  var index = 0

  var call = context ? function () {
    fns[index].call(context, next)
  } : function () {
    fns[index](next)
  }

  call()

  function next(err) {
    if (err || ++index === length) return callback(err);

    call()
  }
}

function noop() {}