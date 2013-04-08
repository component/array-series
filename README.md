# Array Series [![Build Status](https://travis-ci.org/jonathanong/array-series.png)](https://travis-ci.org/jonathanong/array-series)

Call an array of asynchronous functions in series

### API

#### series(fns[, context[, callback]])

```js
var series = require('array-series')

series([
  function (done) {
    done()
  }
], this, function (err) {

})
```

#### fns

`fns` is an array of functions to call in series.
The argument signature should be:

```js
function (done) {
  done(new Error())
  // or
  done()
}
```

That is, each function should only take a `done` as an argument.
Each callback should only take an optional `Error` as an argument.

#### context

Optional context to pass to each `fn`.
Basically `fn.call(context, done)`.

#### callback(err)

```js
function (err) {

}
```

Only argument is an `Error` argument.
It will return the first error in the series of functions that returns an error,
and no function after will be called.

### License

WTFPL