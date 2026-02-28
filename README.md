# @quentinadam/unreachable

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple library to assert unreachable code paths.

`unreachable` is meant for exhaustive checks. At compile time, TypeScript only accepts calls where the value has been
narrowed to `never` (no possible value left). If it is still reached at runtime, it throws an `AssertionError`.

## Usage

```ts
import unreachable from '@quentinadam/unreachable';

function transform(value: number | string) {
  if (typeof value === 'number') {
    return value * 2;
  }
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return unreachable(value);
}
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-unreachable/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-unreachable/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/unreachable.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/unreachable
[jsr-image]: https://jsr.io/badges/@quentinadam/unreachable?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/unreachable
