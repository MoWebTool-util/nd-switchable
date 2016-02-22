/**
 * @module Switchable
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

var Switchable = require('./switchable');

// 展现型标签页组件
module.exports = Switchable.extend({
  attrs: {
    classPrefix: 'ui-tabs'
  }
});
