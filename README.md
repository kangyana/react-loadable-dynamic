<h1 align="center" style="font-size: 50px;color: #d56161;">REACT LOADABLE DYNAMIC</h1>

<div align="center">

A React Load component on demand.

[![NPM version][npm]][npm-url] [![NPM downloads][npm-downloads]][npm-url] ![gzip size](https://img.badgesize.io/https:/unpkg.com/react-loadable-dynamic?label=gzip%20size&compression=gzip) ![GitHub](https://img.shields.io/github/license/kangyana/react-loadable-dynamic)

English | [简体中文](https://github.com/kangyana/react-loadable-dynamic/blob/master/README-zh_CN.md)

</div>

## 🤔 Why use dynamic

It includes functions like `split chunks`, `async chunks loader`, `loading state maintainance`, so developers is free from those technical details and is able to focus their business.

Usually work with [dynamic import syntax](https://github.com/tc39/proposal-dynamic-import).

## 📦 Install

```bash
$ npm install --save react-loadable-dynamic
# or
$ yarn add react-loadable-dynamic
```

## 🔨 Usage

**Create dynamic component**

```ts
import dynamic from 'react-loadable-dynamic';

export default dynamic({
  loader: async function () {
    // webpackChunkName tells webpack create separate bundle for HugeA
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './HugeA');
    return HugeA;
  },
});
```

**Use dynamic component**

```js
import React from 'react';
import AsyncHugeA from './AsyncHugeA';

// import as normal component
// with below benefits out of box:
// 1. download bundle automatically
// 2. give a loading splash while downloading (customizable)
// 3. display HugeA whenever component downloaded
export default () => {
  return <AsyncHugeA />;
};
```

## 💻 Online Demo

[![Edit demo for react-loadable-dynamic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-react-loadable-dynamic-forked-0bl727)

## 🤝 Contributing

```bash
$ git clone git@github.com:kangyana/react-loadable-dynamic.git
$ cd hooks
```

[npm]: https://img.shields.io/npm/v/react-loadable-dynamic.svg?style=flat
[npm-url]: https://www.npmjs.com/package/react-loadable-dynamic
[npm-downloads]: https://img.shields.io/npm/dm/react-loadable-dynamic.svg?style=flat
