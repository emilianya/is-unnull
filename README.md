# is-unnull

> Return true if the given value is unnull.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-unnull
```

## Usage

```js
var isUnnull = require('is-unnull');

isUnnull(0);
//=> true
isUnnull(null);
//=> false
isUnnull("2");
//=> true
isUnnull(undefined);
//=> true
```