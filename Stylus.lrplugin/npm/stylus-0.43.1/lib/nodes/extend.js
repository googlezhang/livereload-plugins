
/*!
 * Stylus - Extend
 * Copyright(c) 2010 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Node = require('./node');

/**
 * Initialize a new `Extend` with the given `selectors` array.
 *
 * @param {Array} selectors array of the selectors
 * @api public
 */

var Extend = module.exports = function Extend(selectors){
  Node.call(this);
  this.selectors = selectors;
};

/**
 * Inherit from `Node.prototype`.
 */

Extend.prototype.__proto__ = Node.prototype;

/**
 * Return a clone of this node.
 * 
 * @return {Node}
 * @api public
 */

Extend.prototype.clone = function(){
  return new Extend(this.selectors);
};

/**
 * Return `@extend selectors`.
 *
 * @return {String}
 * @api public
 */

Extend.prototype.toString = function(){
  return '@extend ' + this.selectors.join(', ');
};
