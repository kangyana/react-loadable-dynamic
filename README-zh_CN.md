<h1 align="center" style="font-size: 50px;color: #d56161;">REACT LOADABLE DYNAMIC</h1>

<div align="center">

一个 React 按需加载组件.

[![NPM version][npm]][npm-url] [![NPM downloads][npm-downloads]][npm-url] ![gzip size](https://img.badgesize.io/https:/unpkg.com/react-loadable-dynamic?label=gzip%20size&compression=gzip) ![GitHub](https://img.shields.io/github/license/kangyana/react-loadable-dynamic)

[English](https://github.com/kangyana/react-loadable-dynamic/blob/master/README.md) | 简体中文

</div>

## 🤔 为什么使用

它封装了使用一个异步组件需要做的状态维护工作，开发者可以更专注于自己的业务组件开发，而不必关心 `code spliting`、`async module`、`loading` 等等技术细节。

通常搭配 [动态 import 语法](https://github.com/tc39/proposal-dynamic-import) 使用。

## 📦 安装

```bash
$ npm install --save react-loadable-dynamic
# or
$ yarn add react-loadable-dynamic
```

## 🔨 使用

**封装一个异步组件**

```ts
import dynamic from 'react-loadable-dynamic';

export default dynamic({
  loader: async function () {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './HugeA');
    return HugeA;
  },
});
```

**使用异步组件**

```js
import React from 'react';
import AsyncHugeA from './AsyncHugeA';

// 像使用普通组件一样即可
// dynamic 为你做:
// 1. 异步加载该模块的 bundle
// 2. 加载期间 显示 loading（可定制）
// 3. 异步组件加载完毕后，显示异步组件
export default () => {
  return <AsyncHugeA />;
};
```

## 💻 在线体验

[![Edit demo for react-loadable-dynamic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-react-loadable-dynamic-forked-0bl727)

## 🤝 参与共建

```bash
$ git clone git@github.com:kangyana/react-loadable-dynamic.git
$ cd hooks
```

[npm]: https://img.shields.io/npm/v/react-loadable-dynamic.svg?style=flat
[npm-url]: https://www.npmjs.com/package/react-loadable-dynamic
[npm-downloads]: https://img.shields.io/npm/dm/react-loadable-dynamic.svg?style=flat
