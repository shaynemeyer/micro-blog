/* message/message.js */
const mustacheTemplate = require('./mustacheTemplate');
const marked = require('marked');
const readTextFile = require('./readTextFile');

module.exports = {
  mustacheTemplate: mustacheTemplate,
  readTextFile,
  marked
};