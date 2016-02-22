# nd-switchable

[![Travis](https://img.shields.io/travis/ndfront/nd-switchable.svg?style=flat-square)](https://github.com/ndfront/nd-switchable)
[![Coveralls](https://img.shields.io/coveralls/ndfront/nd-switchable.svg?style=flat-square)](https://github.com/ndfront/nd-switchable)
[![NPM version](https://img.shields.io/npm/v/nd-switchable.svg?style=flat-square)](https://npmjs.org/package/nd-switchable)

> Switchable提供了切换的基本操作，并通过参数配置实现了自动播放，循环，切换等操作，并提供不同的特点封装成了Tabs，Slide，Carousel，Accordion模块。用户可以根据自己的需求引用不同的模块。fork 自 [arale-switchable](https://github.com/aralejs/switchable)

## 安装

```bash
$ npm install nd-switchable --save
```

## 使用

```js
var Switchable = require('nd-switchable');
// use Switchable
var Slide = require('nd-switchable/lib/slide');
// use Slide
var Accordion = require('nd-switchable/lib/accordion');
// use Accordion
var Carousel = require('nd-switchable/lib/carousel');
// use Carousel
var Tabs = require('nd-switchable/lib/tabs');
// use Tabs
```
